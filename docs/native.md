# Apps nativas (Capacitor)

La app web se empaqueta con [Capacitor 8](https://capacitorjs.com) como app Android e iOS. El código es el mismo; las
funciones nativas están en `src/features/` y `src/platform/` y solo se activan dentro de la app
(`Capacitor.isNativePlatform()`).

- **App id:** `com.yoseloquecomo.app`
- **Config:** [`capacitor.config.json`](../capacitor.config.json)
- **Proyectos nativos:** `android/` y `ios/`, versionados. Se editan desde Android Studio y Xcode.

## Qué hace cada plugin

| Función                                               | Plugin                                                           | Dónde                          |
| ----------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------ |
| Escáner de código de barras / QR → Open Food Facts    | `@capacitor/barcode-scanner` (ML Kit en Android, Vision en iOS)  | `src/features/barcode/`        |
| Recordatorio de suplementos con la app cerrada        | `@capacitor/local-notifications`                                 | `src/features/reminders.js`    |
| Notificaciones push (opcional)                        | `@capacitor/push-notifications`                                  | `src/features/push.js`         |
| Vibración (temporizadores, récords…) en iOS y Android | `@capacitor/haptics`                                             | `src/features/native-shell.js` |
| Botón atrás de Android, color de la barra de estado   | `@capacitor/app`, `@capacitor/status-bar`                        | `src/features/native-shell.js` |
| Exportar copia/Excel/imagen → menú Compartir          | `@capacitor/filesystem`, `@capacitor/share`                      | `src/platform/downloads.js`    |
| Sesión guardada en almacenamiento nativo              | `@capacitor/preferences`                                         | `src/platform/supabase.js`     |
| Login con Google / enlace mágico (vuelta a la app)    | `@capacitor/browser`, `@capacitor/app` (deep link)               | `src/platform/auth.js`         |
| Cámara (fotos de progreso)                            | WebView: `getUserMedia` / `<input type=file>` + permiso `CAMERA` | código original                |

## Compilar

Antes de cada compilación nativa hay que generar la web y copiarla: `npm run cap:sync` (hace `vite build` + `cap sync`).
Las variables `VITE_SUPABASE_*` de `.env.local` se incrustan en el build.

### Android (Windows, macOS o Linux)

Requisitos: Android Studio y **JDK 21**. Capacitor 8 no compila con el 17; Android Studio ya trae el 21.

```bash
npm run cap:android          # build + sync + abre Android Studio → ▶ Run
# o por línea de comandos:
cd android && ./gradlew assembleDebug    # APK en android/app/build/outputs/apk/debug/
```

Para publicar en Google Play: Android Studio → _Build → Generate Signed App Bundle_ (`.aab`). Guarda el keystore fuera
del repo, porque sin él no se pueden publicar actualizaciones.

### iOS (requiere un Mac)

Requisitos: Xcode 16+. Las dependencias se gestionan con Swift Package Manager, así que no hace falta CocoaPods.

```bash
npm run cap:ios              # build + sync + abre Xcode
```

En Xcode: _Signing & Capabilities_ → elige tu equipo (Apple Developer, 99 $/año para publicar).

## Pendiente de configurar (necesita cuentas)

### Login con Google / Apple en nativo

1. Supabase → Authentication → URL Configuration: añade `com.yoseloquecomo.app://auth-callback` a _Redirect URLs_
   (ya está en `supabase/config.toml` para local).
2. Activa los proveedores en Supabase (ver `supabase/README.md`).
3. **Apple exige "Iniciar sesión con Apple"** si ofreces Google en iOS. Hay que activarlo antes de publicar en la App Store.

### Notificaciones push

Desactivadas por defecto (`VITE_PUSH_ENABLED` sin definir). En Android, registrar push sin Firebase configurado
**cierra la app**.

1. **Android:** crea un proyecto en Firebase, añade la app Android `com.yoseloquecomo.app`, descarga
   `google-services.json` y ponlo en `android/app/`. No lo subas a un repo público.
2. **iOS:** en Xcode añade la capability _Push Notifications_ y _Background Modes → Remote notifications_. Crea una
   APNs Auth Key en Apple Developer y súbela a Firebase (si usas FCM para ambos).
3. Pon `VITE_PUSH_ENABLED=true` en `.env.local` y recompila.
4. Los tokens se guardan en la tabla `push_tokens`. Para **enviar** notificaciones (p. ej. un recordatorio semanal de
   pesarse) hará falta una Edge Function con la clave de servicio de FCM, llamada desde un cron de Supabase. No está
   hecho todavía.

Los recordatorios de suplementos **no** necesitan push: son notificaciones locales y funcionan sin Firebase.

## Limitaciones conocidas

- **Bloqueo con huella/Face ID**: la app original usa WebAuthn (`navigator.credentials`), que no funciona dentro del
  WebView. En nativo hay que sustituirlo por un plugin biométrico (p. ej. `@aparajita/capacitor-biometric-auth`).
  Pendiente.
- **Temporizadores de descanso** del gimnasio: con la app en segundo plano, iOS pausa JavaScript y el aviso de fin de
  descanso llega al volver a la app. Se puede mejorar programando una notificación local al iniciar el descanso.
- Los iconos nativos salen de los de la PWA (512 px). Para las tiendas conviene un original de 1024 px: sustituye
  `assets/icon-only.png` y ejecuta `npx capacitor-assets generate`.
