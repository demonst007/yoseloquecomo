# Supabase · yoseloquecomo

Backend de la app: base de datos Postgres (con RLS), autenticación, almacenamiento privado de fotos de progreso y dos Edge Functions:

- **`ai`**: proxy autenticado a la API de Claude (Anthropic) que devuelve siempre un objeto JSON, con límite diario de consultas por usuario.
- **`delete-account`**: el usuario elimina su propia cuenta (obligatorio en App Store / Google Play para apps con registro).

```
supabase/
├── config.toml                 # configuración para desarrollo local (supabase start)
├── seed.sql                    # datos de prueba (vacío)
├── migrations/                 # esquema de BD, RLS y bucket de Storage
└── functions/
    ├── _shared/                # CORS, respuestas JSON, clientes de Supabase
    ├── ai/                     # index.ts + parse.ts
    └── delete-account/
```

---

## 1. Puesta en marcha (proyecto en la nube)

Requisitos: Node 18+ (se usa `npx supabase`, no hace falta instalar nada global) y una cuenta en [supabase.com](https://supabase.com). Para desarrollo local, además, Docker.

### 1.1 Crear el proyecto

1. En el [Dashboard](https://supabase.com/dashboard) → **New project**. Nombre: `yoseloquecomo`. Región: la más cercana a los usuarios (p. ej. `eu-west` / Frankfurt o París). Guarda la contraseña de la base de datos.
2. Apunta el **Project ref** (Settings → General; es el subdominio de `https://<ref>.supabase.co`).

### 1.2 Vincular el repositorio

Desde la raíz del repo:

```bash
npx supabase login
npx supabase link --project-ref <ref>
```

(Pedirá la contraseña de la base de datos.)

### 1.3 Aplicar las migraciones

```bash
npx supabase db push
```

Crea las tablas `profiles`, `user_state`, `progress_photos`, `push_tokens`, `ai_usage`, sus políticas RLS, el trigger que crea el perfil al registrarse y el bucket privado `progress-photos` con sus políticas.

### 1.4 Secretos de las funciones

```bash
npx supabase secrets set \
  ANTHROPIC_API_KEY=sk-ant-xxxxxxxx \
  AI_DAILY_LIMIT=40 \
  ALLOWED_ORIGINS="https://app.tudominio.com,capacitor://localhost,https://localhost,http://localhost:5173"
```

| Secreto | Obligatorio | Por defecto | Descripción |
|---|---|---|---|
| `ANTHROPIC_API_KEY` | Sí | — | Clave de la API de Anthropic ([console.anthropic.com](https://console.anthropic.com)). |
| `AI_DAILY_LIMIT` | No | `40` | Consultas de IA por usuario y día (día UTC). |
| `ALLOWED_ORIGINS` | No | `http://localhost:5173,capacitor://localhost,https://localhost,http://localhost` | Orígenes permitidos por CORS, separados por comas. `*` permite cualquiera (no recomendado). |
| `AI_MODEL_DEFAULT` | No | `claude-sonnet-5-5` | Modelo para `tier: "default"`. |
| `AI_MODEL_QUICK` | No | `claude-haiku-5-5` | Modelo para `tier: "quick"`. |
| `AI_EFFORT_DEFAULT` | No | `medium` | Nivel de esfuerzo (`low`, `medium`, `high`, `xhigh`, `max`) para `default`. |
| `AI_EFFORT_QUICK` | No | `low` | Nivel de esfuerzo para `quick`. |

`SUPABASE_URL`, `SUPABASE_ANON_KEY` y `SUPABASE_SERVICE_ROLE_KEY` los inyecta Supabase automáticamente en las funciones; no hay que definirlos.

### 1.5 Desplegar las funciones

```bash
npx supabase functions deploy ai delete-account
```

Ambas se despliegan con `verify_jwt = true` (definido en `config.toml`): el gateway de Supabase rechaza las peticiones sin un JWT válido y, además, cada función vuelve a validar el usuario con `auth.getUser()`.

> Si el proyecto usa las nuevas **JWT Signing Keys** (claves asimétricas) y el gateway rechaza tokens válidos, despliega con `npx supabase functions deploy ai delete-account --no-verify-jwt`. Es seguro: ambas funciones validan el token del usuario por sí mismas y responden `401` si no es válido.

### 1.6 Autenticación

**Authentication → URL Configuration**

- **Site URL**: la URL de producción de la web (p. ej. `https://app.tudominio.com`). Mientras no exista, `http://localhost:5173`.
- **Redirect URLs** (añadir todas):
  - `http://localhost:5173/**`
  - `https://app.tudominio.com/**` (cuando exista)
  - `capacitor://localhost/**`
  - `https://localhost/**`
  - `com.yoseloquecomo.app://auth-callback` (deep link de la app nativa para OAuth y enlaces mágicos)

**Authentication → Sign In / Providers**

1. **Email**: activado. Deja activada la confirmación de email ("Confirm email"). Para producción configura un SMTP propio (Authentication → Emails → SMTP Settings); el SMTP por defecto de Supabase tiene un límite muy bajo de envíos por hora.
2. **Google**:
   - En [Google Cloud Console](https://console.cloud.google.com/apis/credentials) crea un *OAuth client ID* de tipo **Web application**.
   - *Authorized redirect URI*: `https://<ref>.supabase.co/auth/v1/callback`.
   - Copia *Client ID* y *Client secret* en el proveedor Google de Supabase y actívalo.
   - Si más adelante se usa el login nativo de Google en Android/iOS, añade también los client IDs de Android/iOS en el campo "Authorized Client IDs".
3. **Apple** (obligatorio en iOS si se ofrece login con Google):
   - En [Apple Developer](https://developer.apple.com/account/resources) crea un *Services ID* con "Sign in with Apple", dominio `<ref>.supabase.co` y *Return URL* `https://<ref>.supabase.co/auth/v1/callback`.
   - Genera una *Key* con "Sign in with Apple" y, con ella, el *client secret* (JWT) como indica la guía de Supabase. Ojo: este secreto caduca cada 6 meses.
   - Rellena *Client IDs* (Services ID y el bundle ID `com.yoseloquecomo.app`) y *Secret Key* en el proveedor Apple de Supabase.

### 1.7 Variables del frontend

En **Settings → API Keys** (o *Project Settings → API*) copia:

| Valor en Supabase | Variable en `.env` del frontend |
|---|---|
| Project URL (`https://<ref>.supabase.co`) | `VITE_SUPABASE_URL` |
| Clave `anon` (legacy) o *publishable* (`sb_publishable_...`) | `VITE_SUPABASE_ANON_KEY` |

```dotenv
VITE_SUPABASE_URL=https://<ref>.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...   # o sb_publishable_...
```

**Nunca** pongas la clave `service_role` / *secret* ni la `ANTHROPIC_API_KEY` en el frontend.

---

## 2. Desarrollo local (opcional)

Requiere Docker.

```bash
npx supabase start            # levanta Postgres, Auth, Storage, Studio... y aplica migraciones + seed
npx supabase status           # muestra API URL y anon key locales para el .env del frontend
```

- Studio: http://127.0.0.1:54323
- Emails de Auth (confirmaciones, enlaces mágicos): http://127.0.0.1:54324
- API: http://127.0.0.1:54321 → `VITE_SUPABASE_URL=http://127.0.0.1:54321`

Funciones en local: crea `supabase/functions/.env` (no se sube a git) con `ANTHROPIC_API_KEY=...` y ejecuta:

```bash
npx supabase functions serve --env-file supabase/functions/.env
```

Para rehacer la base local desde cero: `npx supabase db reset`.

Nuevas migraciones: `npx supabase migration new <nombre>` y después `npx supabase db push`.

---

## 3. Modelo de datos

Todas las tablas tienen RLS activado; cada usuario solo ve y modifica sus propias filas. Al borrar el usuario de `auth.users`, todo se borra en cascada.

| Tabla | Clave | Acceso del usuario | Contenido |
|---|---|---|---|
| `profiles` | `id` (= `auth.users.id`) | leer / actualizar la suya | `display_name`, `height_cm`, `sex` (`m`/`f`/`x`), `birth_year`, `protein_g`, `fat_g`, `activity`, `onboarded`. Se crea sola al registrarse (nombre = `name` / `full_name` del proveedor o la parte del email antes de `@`). |
| `user_state` | `user_id` | leer / insertar / actualizar la suya | `data` (jsonb, el objeto `S` completo), `client_ts` (ms epoch del último cambio en el cliente), `updated_at` (automático). Límite de seguridad ~10 MB. |
| `progress_photos` | `id` | CRUD de las suyas | `taken_on`, `view` (`frente`/`lado`/`espalda`), `storage_path`, `weight_kg`, `body_fat`. `storage_path` debe empezar por `<user_id>/`. |
| `push_tokens` | (`user_id`, `token`) | CRUD de los suyos | `platform` (`android`/`ios`/`web`), `updated_at`. |
| `ai_usage` | `id` | solo lectura de las suyas | Una fila por llamada a la IA: `feature`, `tier`, `model`, `input_tokens`, `output_tokens`. Solo escribe la función `ai`. |

Ejemplos con supabase-js:

```ts
// Guardar el estado (upsert de la fila propia)
await supabase.from('user_state').upsert({ user_id: user.id, data: S, client_ts: Date.now() });

// Leer el estado
const { data } = await supabase.from('user_state').select('data, client_ts, updated_at').maybeSingle();
```

### Storage: fotos de progreso

- Bucket **privado** `progress-photos` (máx. 10 MB por archivo; JPEG, PNG o WebP).
- La ruta **debe** empezar por el id del usuario: `<user_id>/<lo-que-sea>`. Recomendado: `<user_id>/<YYYY-MM-DD>-<view>-<uuid>.jpg`.
- Para mostrar una foto usa URLs firmadas (el bucket no es público):

```ts
const path = `${user.id}/${fecha}-frente-${crypto.randomUUID()}.jpg`;
await supabase.storage.from('progress-photos').upload(path, blob, { contentType: 'image/jpeg' });
await supabase.from('progress_photos').insert({ taken_on: fecha, view: 'frente', storage_path: path, weight_kg: 78.4 });

const { data } = await supabase.storage.from('progress-photos').createSignedUrl(path, 3600);
// data.signedUrl
```

---

## 4. Contrato de la función `ai`

`POST {VITE_SUPABASE_URL}/functions/v1/ai`

Cabeceras: `Authorization: Bearer <access_token del usuario>`, `apikey: <VITE_SUPABASE_ANON_KEY>`, `Content-Type: application/json`. Con `supabase.functions.invoke` las tres se envían automáticamente si hay sesión iniciada.

### Petición

```jsonc
{
  "prompt": "string (obligatorio, 1–20000 caracteres)",
  "tier": "default" | "quick",          // opcional, por defecto "default"
  "feature": "food_estimate",           // opcional, [a-zA-Z0-9_.-]{1,64}; solo para estadísticas
  "images": [                           // opcional, máx. 4
    { "media_type": "image/jpeg" | "image/png" | "image/webp",
      "data": "<base64 SIN el prefijo data:...;base64,>" }   // máx. 5 MB decodificado cada una
  ],
  "schema": { /* JSON Schema */ }       // opcional, ver más abajo
}
```

- `tier: "default"` → `claude-sonnet-5-5` (más capaz; estimación de comida, nutricionista, chef, cierre mensual).
- `tier: "quick"` → `claude-haiku-5-5` (rápido y barato; opinión de fotos de progreso, consejo de medidas).
- Las imágenes se envían antes del texto. Si llega un prefijo `data:...;base64,` se elimina, pero lo correcto es enviarlo sin él.
- **Recomendado**: reducir las fotos en el cliente antes de enviarlas (lado mayor ≈ 1568 px, JPEG calidad ~0.8). Imágenes más grandes no mejoran el resultado y cuestan más tokens y tiempo.
- `schema` (opcional): si se envía un JSON Schema, se usan *structured outputs* de la API y la respuesta queda garantizada con esa forma (objetos con `additionalProperties: false` y `required`). Si no se envía, la función confía en el prompt de sistema ("responde solo JSON") y en un parseo robusto (quita bloques ```json y extrae el `{...}` más externo). Los prompts actuales, que terminan en "Responde solo JSON: {...}", funcionan sin `schema`.

### Respuesta correcta (`200`)

```json
{
  "ok": true,
  "data": { "...": "objeto JSON devuelto por el modelo" },
  "meta": { "model": "claude-sonnet-5-5", "tier": "default", "remaining": 37 }
}
```

`data` es siempre un objeto (nunca un array ni un string). `meta.remaining` = consultas que quedan hoy. `meta.model` es el modelo que respondió realmente (puede diferir si actuó el *fallback* del servidor).

### Errores

Siempre con la forma `{ "ok": false, "error": "<código>", "message": "<texto en español para mostrar al usuario>" }`.

| HTTP | `error` | Cuándo |
|---|---|---|
| 400 | `bad_request` | Cuerpo no es JSON o no es un objeto. |
| 400 | `bad_prompt` / `prompt_too_long` | Falta `prompt` o supera 20000 caracteres. |
| 400 | `bad_tier` / `bad_feature` / `bad_schema` | Valor no válido. |
| 400 | `bad_images` / `too_many_images` / `bad_image_type` / `image_too_large` | Imágenes mal formadas, más de 4, tipo no soportado o > 5 MB. |
| 400 | `ai_bad_request` | La API de Claude rechazó la petición (imagen corrupta, `schema` no soportado...). |
| 401 | `unauthorized` | Sin sesión o token caducado/no válido. (Si el gateway rechaza el JWT antes de llegar a la función, la respuesta es un `401` con otra forma: trátalo igual.) |
| 405 | `method_not_allowed` | Método distinto de POST/OPTIONS. |
| 413 | `too_large` | Cuerpo > 32 MB. |
| 429 | `quota` | Límite diario alcanzado. `message`: "Has llegado al límite diario de consultas de IA. Vuelve mañana." |
| 500 | `server_config` | Falta `ANTHROPIC_API_KEY` o es inválida. |
| 500 | `internal` | Error inesperado. |
| 502 | `ai_refused` | El modelo declinó responder. |
| 502 | `ai_bad_output` | La respuesta del modelo no contenía un objeto JSON válido. |
| 502 | `ai_busy` | Anthropic devolvió límite de tasa. |
| 502 | `ai_unavailable` | Otro error de Anthropic o de red. |
| 504 | `ai_timeout` | Anthropic tardó demasiado. |

Notas sobre la cuota:

- Cuenta las filas de `ai_usage` del usuario desde las 00:00 UTC.
- Se registra una fila por cada llamada que llegó a Anthropic (incluidas las que acaban en `ai_refused` o `ai_bad_output`, porque esos tokens también se pagan). Los errores de validación y de cuota no consumen.
- Dos peticiones simultáneas pueden pasar el control a la vez y superar el límite en 1–2 consultas; es aceptable para proteger el coste.

### Ejemplo con supabase-js

```ts
import { FunctionsHttpError } from '@supabase/supabase-js';

async function aiJson(prompt: string, opts: { tier?: 'default' | 'quick'; feature?: string; images?: Blob[] } = {}) {
  const images = await Promise.all((opts.images ?? []).map(async (b) => ({
    media_type: b.type as 'image/jpeg' | 'image/png' | 'image/webp',
    data: await blobToBase64(b), // base64 sin prefijo
  })));

  const { data, error } = await supabase.functions.invoke('ai', {
    body: { prompt, tier: opts.tier ?? 'default', feature: opts.feature, images },
  });

  if (error) {
    // En respuestas no-2xx el cuerpo JSON está en error.context (un Response)
    let body: { error?: string; message?: string } = {};
    if (error instanceof FunctionsHttpError) body = await error.context.json().catch(() => ({}));
    throw Object.assign(new Error(body.message ?? 'No se ha podido contactar con la IA.'), { code: body.error ?? 'network' });
  }
  return data.data; // objeto JSON
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(',')[1] ?? '');
    r.onerror = reject;
    r.readAsDataURL(blob);
  });
}
```

---

## 5. Contrato de la función `delete-account`

`POST {VITE_SUPABASE_URL}/functions/v1/delete-account` (mismas cabeceras que `ai`).

### Petición

```json
{ "confirm": true }
```

### Proceso

1. Valida el token del usuario.
2. Borra todos los archivos bajo `<user_id>/` en el bucket `progress-photos`.
3. Borra el usuario con `auth.admin.deleteUser`. Por `ON DELETE CASCADE` se eliminan `profiles`, `user_state`, `progress_photos`, `push_tokens` y `ai_usage`.

### Respuestas

| HTTP | Cuerpo |
|---|---|
| 200 | `{ "ok": true }` → el cliente debe hacer `supabase.auth.signOut()` y borrar sus datos locales (localStorage). |
| 400 | `{ "ok": false, "error": "confirm_required", "message": "Debes confirmar que quieres eliminar tu cuenta." }` |
| 400 | `{ "ok": false, "error": "bad_request", ... }` (cuerpo no JSON) |
| 401 | `{ "ok": false, "error": "unauthorized", ... }` |
| 405 | `{ "ok": false, "error": "method_not_allowed", ... }` |
| 500 | `{ "ok": false, "error": "delete_failed", "message": "No se ha podido eliminar la cuenta. Inténtalo de nuevo o contacta con soporte." }` |

```ts
const { error } = await supabase.functions.invoke('delete-account', { body: { confirm: true } });
if (!error) { await supabase.auth.signOut(); localStorage.clear(); }
```

---

## 6. Modelos de IA y costes

| Tier | Modelo | Precio aprox. (entrada / salida por millón de tokens) |
|---|---|---|
| `default` | `claude-sonnet-5-5` | 2 $ / 10 $ |
| `quick` | `claude-haiku-5-5` | 0,10 $ / 0,50 $ |

- Ambos modelos razonan internamente (*adaptive thinking*); el esfuerzo se ajusta con `AI_EFFORT_DEFAULT` / `AI_EFFORT_QUICK`. Más esfuerzo = mejor calidad pero más lento y caro.
- Con `claude-sonnet-5-5` está activado el *fallback* del servidor: si el modelo declina una petición por sus filtros de seguridad, Anthropic la reintenta automáticamente con otro modelo adecuado en la misma llamada.
- Para cambiar de modelo basta con `npx supabase secrets set AI_MODEL_DEFAULT=<id>` (no hace falta redesplegar; se aplica cuando arrancan nuevas instancias de la función).
- Consumo por usuario: `select user_id, count(*), sum(input_tokens), sum(output_tokens) from ai_usage where created_at > now() - interval '30 days' group by 1 order by 2 desc;` (en el SQL Editor).
