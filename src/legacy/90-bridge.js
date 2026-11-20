/* Bridge (hand-written, not extracted). Top-level let/const of the legacy blocks
   are global *lexical* bindings, not window properties, so ES modules in src/
   cannot reach them cleanly. This exposes the few they need. Keep it tiny. */
window.__legacy = {
  getState: function () { return S; },
  getTab: function () { return tab; },
  storageKey: K,
  rerender: function () { try { go(tab); } catch (e) {} },
  cloud: function () { return cloud(); },
  toast: function (m) { try { qt(m); } catch (e) {} },
};
