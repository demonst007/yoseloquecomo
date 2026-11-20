import { PushNotifications } from '@capacitor/push-notifications';
import { supabase } from '../platform/supabase.js';
import { getUser, onAuthChange, authReady } from '../platform/auth.js';
import { isNative, platform } from '../platform/native.js';

/**
 * Remote push: registers the device token in `push_tokens` for the signed-in user.
 * Disabled unless VITE_PUSH_ENABLED=true, because it needs per-platform setup first
 * (Android: google-services.json from Firebase; iOS: Push capability + APNs key) —
 * on Android, registering without Firebase configured crashes the app.
 * See docs/native.md.
 */
const ENABLED = import.meta.env.VITE_PUSH_ENABLED === 'true';

let registered = false;

async function register() {
  if (registered || !getUser()) return;
  registered = true;
  let perm = await PushNotifications.checkPermissions();
  if (perm.receive === 'prompt') perm = await PushNotifications.requestPermissions();
  if (perm.receive !== 'granted') return;
  await PushNotifications.addListener('registration', async ({ value }) => {
    const { error } = await supabase
      .from('push_tokens')
      .upsert({ user_id: getUser()?.id, token: value, platform, updated_at: new Date().toISOString() });
    if (error) console.warn('push token', error);
  });
  await PushNotifications.addListener('registrationError', (e) => console.warn('push registration', e));
  await PushNotifications.addListener('pushNotificationReceived', (n) => {
    window.__legacy?.toast(n.title ? `${n.title}${n.body ? ': ' + n.body : ''}` : n.body || '');
  });
  await PushNotifications.register();
}

export async function installPush() {
  if (!ENABLED || !isNative || !supabase) return;
  await authReady;
  register().catch((e) => console.warn('push', e));
  onAuthChange(() => register().catch((e) => console.warn('push', e)));
}
