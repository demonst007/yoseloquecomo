import { App } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';
import { isNative } from '../platform/native.js';

/**
 * Supplement reminder as a real local notification, so it fires with the app
 * closed. The legacy code only checks the alarm (S.sp.al = { on, h: 'HH:MM' })
 * every 20 s while the app is open; that in-app toast keeps working too.
 *
 * Scheduled as one-shot notifications for the next 7 days (re-planned every
 * time the app goes to background/foreground), so today's can be skipped when
 * the supplements are already ticked or the alarm already went off.
 */
const BASE_ID = 7100;
const DAYS = 7;

const ymd = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);

async function reschedule() {
  const S = window.__legacy?.getState();
  const sp = S?.sp;
  const pending = await LocalNotifications.getPending();
  const ours = pending.notifications.filter((n) => n.id >= BASE_ID && n.id < BASE_ID + DAYS);
  if (ours.length) await LocalNotifications.cancel({ notifications: ours.map((n) => ({ id: n.id })) });
  if (!sp?.al?.on || !sp.on?.length || !/^\d{2}:\d{2}$/.test(sp.al.h || '')) return;

  const perm = await LocalNotifications.checkPermissions();
  if (perm.display !== 'granted') {
    if ((await LocalNotifications.requestPermissions()).display !== 'granted') return;
  }

  const [hh, mm] = sp.al.h.split(':').map(Number);
  const now = new Date();
  const notifications = [];
  for (let i = 0; i < DAYS; i++) {
    const at = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, hh, mm);
    if (at <= now) continue;
    const day = ymd(at);
    if (i === 0) {
      const done = sp.ck?.[day] || [];
      if (sp.al.last === day || sp.on.every((x) => done.includes(x))) continue;
    }
    notifications.push({
      id: BASE_ID + i,
      title: '💊 Hora de tus suplementos',
      body: sp.on.join(', '),
      schedule: { at, allowWhileIdle: true },
    });
  }
  if (notifications.length) await LocalNotifications.schedule({ notifications });
}

export function installReminders() {
  if (!isNative) return;
  const run = () => reschedule().catch((e) => console.warn('reminders', e));
  setTimeout(run, 2000);
  App.addListener('appStateChange', run);
}
