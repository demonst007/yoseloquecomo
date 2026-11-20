# yoseloquecomo

Dieta, peso, gimnasio y semana. App web instalable (PWA) y, con Capacitor, app nativa Android/iOS.

Nació como un único `index.html` que funcionaba dentro de claude.ai. Este repo es su migración a un proyecto
mantenible e independiente:

| Antes (claude.ai)                     | Ahora                                                                |
| ------------------------------------- | -------------------------------------------------------------------- |
| `claude.use('db')` / `('user')`       | Supabase: login + tabla `user_state` con seguridad por usuario (RLS) |
| `claude.use('sample')` (IA)           | Edge Function `ai` → API de Anthropic, con cuota diaria por usuario  |
| `claude.use('downloads')`             | Descarga del navegador (y Compartir/Archivos en nativo)              |
| 840 KB en un archivo, imágenes base64 | Vite, bloques separados en `src/legacy/`, imágenes en `public/`      |

## Puesta en marcha

Requisitos: Node 20.19+ (recomendado 22).

```bash
npm install
cp .env.example .env.local   # pon la URL y la anon key de Supabase (opcional)
npm run dev                  # http://localhost:5173
```

Sin `.env.local` la app funciona en **modo local**: sin cuenta ni IA, y los datos solo se guardan en el dispositivo
(como el HTML original fuera de claude.ai). Para montar Supabase (base de datos, login, funciones de IA), sigue
[supabase/README.md](supabase/README.md).

## Scripts

| Script                            | Qué hace                                                                          |
| --------------------------------- | --------------------------------------------------------------------------------- |
| `npm run dev`                     | Servidor de desarrollo                                                            |
| `npm run build`                   | Build de producción en `dist/`                                                    |
| `npm run preview`                 | Sirve el build                                                                    |
| `npm run lint`                    | ESLint (código nuevo de `src/`, `tests/` y `tools/`)                              |
| `npm run format`                  | Prettier                                                                          |
| `npm run test:unit`               | Pruebas unitarias (Vitest)                                                        |
| `npm run test:e2e`                | Pruebas Playwright: paridad con el original, modo nube, escáner                   |
| `npm run cap:android` / `cap:ios` | Build + sync y abre Android Studio / Xcode (ver [docs/native.md](docs/native.md)) |
| `npm run check`                   | lint + formato + build (lo mismo que CI antes de las pruebas)                     |

## Estructura

```
index.html                 HTML de la app; carga los bloques legacy en su orden original
src/
  legacy/                  Código original, extraído tal cual (scripts clásicos, globales compartidos)
    90-bridge.js           Puente: expone a los módulos los globales let/const que necesitan
  platform/                Sustituye al runtime de claude.ai (claude.use) — Supabase, IA, descargas
  ui/                      UI nueva: pantalla de login, sección "Cuenta" del menú
  features/                Funciones nuevas: escáner de códigos (Open Food Facts), notificaciones, integración nativa
  main.js                  Entrada (módulo ES)
public/                    Iconos, imágenes y manifest PWA
supabase/                  Migraciones SQL, Edge Functions (ai, delete-account), config
tests/e2e/                 Playwright
tests/unit/                Vitest
android/, ios/             Proyectos nativos Capacitor (ver docs/native.md)
assets/                    Originales de iconos y splash nativos (tools/generate-native-assets.mjs)
tools/                     Extracción del HTML original y plugin de Vite para los bloques legacy
reference/original.html    El HTML original, referencia para las pruebas de paridad
```

### Cómo funciona la capa legacy

El código original depende de que sus scripts sean **clásicos**: comparten variables globales, los `onclick="..."` del
HTML llaman funciones por nombre y cada bloque se ejecuta en una posición concreta mientras se analiza el HTML. Por eso
no se empaqueta como módulos: `tools/vite-plugin-legacy-blocks.js` sirve cada bloque tal cual en desarrollo y en el
build lo emite con un hash en el nombre (para invalidar caché), sin cambiar el orden.

`window.claude.use(...)` se define en `index.html` como una cola mínima; `src/platform` la sustituye al arrancar y
responde con las implementaciones reales.

### Pruebas de paridad

`tests/e2e/parity.spec.js` abre el HTML original y la app migrada con los mismos datos y la misma fecha, recorre las
4 pestañas y el menú, y exige DOM idéntico, capturas idénticas píxel a píxel y ningún error de consola nuevo. Cualquier
cambio en `src/legacy/` debe mantener estas pruebas en verde (o actualizarlas a propósito si el cambio es deseado).

## Hoja de ruta

1. ✅ Repo, build, extracción fiel y paridad verificada
2. ✅ Capa de plataforma (Supabase, IA, descargas) y login
3. ✅ Esquema Supabase, RLS, Edge Functions `ai` y `delete-account`
4. ✅ Capacitor: Android (APK compilado y probado en emulador) e iOS (proyecto generado, compilar en Mac); escáner de
   códigos de barras/QR con Open Food Facts; recordatorio de suplementos como notificación local; vibración, botón atrás,
   compartir. Push preparado pero desactivado hasta configurar Firebase/APNs
5. ⏳ Multiusuario completo: quitar los valores por defecto de Javi (nombre, fecha de nacimiento, rutinas) y apoyarse en
   el asistente de bienvenida que ya existe; fotos de progreso en Storage (hoy solo en el dispositivo)
6. ⏳ Bloqueo biométrico nativo (WebAuthn no funciona en el WebView) y aviso de fin de descanso en segundo plano
7. ⏳ Migración progresiva de `src/legacy/` a módulos con pruebas unitarias

## Problemas conocidos en Windows

Si Vitest falla con _"failed to find the current suite"_, la ruta del proyecto tiene la letra de unidad en minúscula
(`c:...`, típico al abrir la terminal desde VS Code). Ejecuta desde `C:...` (p. ej. `cd C:Users...javi`).
