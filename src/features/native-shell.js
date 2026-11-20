import { App } from '@capacitor/app';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { StatusBar, Style } from '@capacitor/status-bar';
import { isNative, platform } from '../platform/native.js';

/**
 * navigator.vibrate() does not exist on iOS and needs extra permissions in the
 * Android WebView. The legacy code calls it for timers, records, long-press...:
 * route it to native haptics instead.
 */
function installHaptics() {
  const pulse = (ms) =>
    ms <= 15 ? Haptics.impact({ style: ImpactStyle.Light }) : Haptics.vibrate({ duration: Math.min(ms, 1000) });
  navigator.vibrate = (pattern) => {
    const steps = Array.isArray(pattern) ? pattern : [pattern];
    let t = 0;
    steps.forEach((ms, i) => {
      if (i % 2 === 0 && ms > 0) setTimeout(() => pulse(ms).catch(() => {}), t);
      t += ms;
    });
    return true;
  };
}

/** Android back button: close the top-most panel, then go to the first tab, then leave. */
function installBackButton() {
  const call = (name) => typeof window[name] === 'function' && (window[name](), true);
  App.addListener('backButton', () => {
    if (document.getElementById('auth-gate')) return App.minimizeApp();
    if (document.getElementById('pmd') && call('pmodX')) return;
    if (document.getElementById('mnp') && call('mnx')) return;
    if (document.getElementById('qs') && call('qx')) return;
    const modal = [...document.querySelectorAll('.mdl')].pop();
    if (modal) return modal.remove();
    if (window.__legacy?.getTab() !== 0) return window.go(0);
    App.minimizeApp();
  });
}

/** Keep status bar icons readable for the current theme (legacy toggles data-theme). */
function installStatusBar() {
  const apply = () => {
    const forced = document.documentElement.dataset.theme;
    const dark = forced ? forced === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    StatusBar.setStyle({ style: dark ? Style.Dark : Style.Light }).catch(() => {});
    if (platform === 'android') StatusBar.setBackgroundColor({ color: dark ? '#0F1626' : '#EDEFF2' }).catch(() => {});
  };
  apply();
  new MutationObserver(apply).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', apply);
}

export function installNativeShell() {
  if (!isNative) return;
  installHaptics();
  installBackButton();
  installStatusBar();
}
