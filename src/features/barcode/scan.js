import { isNative } from '../../platform/native.js';

/**
 * Interprets a scanned value. Food packages carry EAN/UPC barcodes; QR codes
 * may be a GS1 Digital Link (https://…/01/<GTIN>/…) or something unrelated.
 * @returns {{ code: string } | { text: string }}
 */
export function parseScanned(raw) {
  const v = String(raw || '').trim();
  if (/^\d{8,14}$/.test(v)) return { code: v };
  const gs1 = /\/01\/(\d{14})(?:[/?#]|$)/.exec(v);
  if (gs1) return { code: gs1[1].replace(/^0/, '') }; // GTIN-14 → EAN-13 when padded
  return { text: v };
}

/** Native scanner UI (Android: ML Kit, iOS: Apple Vision). */
async function scanNative() {
  const {
    CapacitorBarcodeScanner,
    CapacitorBarcodeScannerTypeHintALLOption,
    CapacitorBarcodeScannerAndroidScanningLibrary,
  } = await import('@capacitor/barcode-scanner');
  try {
    const { ScanResult } = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL, // EAN/UPC on packages, QR (GS1 Digital Link)
      scanInstructions: 'Apunta al código de barras del envase',
      cancelButtonAccessibilityLabel: 'Cancelar',
      android: { scanningLibrary: CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT },
    });
    return ScanResult || null;
  } catch (e) {
    if (/cancel/i.test(String(e?.message || e))) return null;
    if (/permission|denied/i.test(String(e?.message || e)))
      throw new Error('Sin permiso de cámara no puedo leer el código.', { cause: e });
    throw e;
  }
}

/** Web: camera + BarcodeDetector where available (Chrome/Android), else type the number. */
function scanWeb() {
  const supported = 'BarcodeDetector' in window && navigator.mediaDevices?.getUserMedia;
  return new Promise((resolve) => {
    const o = document.createElement('div');
    o.className = 'bcs';
    o.setAttribute('role', 'dialog');
    o.setAttribute('aria-label', 'Escanear código de barras');
    o.innerHTML = `<div class="bcs-pn">
      <b>📷 Escanear código de barras</b>
      ${supported ? '<video class="bcs-v" playsinline muted></video><div class="mut">Apunta al código de barras o QR del envase.</div>' : '<div class="mut">Este navegador no puede leer códigos con la cámara. Escribe los números que hay bajo las barras.</div>'}
      <div class="row"><input class="bcs-i" inputmode="numeric" placeholder="Número del código (EAN)" aria-label="Número del código"><button class="bcs-ok">Buscar</button></div>
      <button class="g bcs-x">Cancelar</button></div>`;
    document.body.append(o);
    const video = o.querySelector('video');
    let stream = null;
    let timer = null;
    const done = (value) => {
      clearInterval(timer);
      stream?.getTracks().forEach((t) => t.stop());
      o.remove();
      resolve(value);
    };
    o.querySelector('.bcs-x').onclick = () => done(null);
    o.querySelector('.bcs-ok').onclick = () => done(o.querySelector('.bcs-i').value.trim() || null);
    o.querySelector('.bcs-i').onkeydown = (e) => e.key === 'Enter' && o.querySelector('.bcs-ok').click();
    if (!supported) return o.querySelector('.bcs-i').focus();
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then(async (s) => {
        stream = s;
        video.srcObject = s;
        await video.play();
        const detector = new window.BarcodeDetector({ formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'qr_code'] });
        timer = setInterval(async () => {
          try {
            const [hit] = await detector.detect(video);
            if (hit?.rawValue) done(hit.rawValue);
          } catch {
            /* frame not ready */
          }
        }, 250);
      })
      .catch(() => {
        o.querySelector('.mut').textContent = 'No puedo usar la cámara. Escribe el número del código.';
        video.remove();
      });
  });
}

/** Opens the scanner. Resolves with the raw value, or null if cancelled. */
export const scanCode = () => (isNative ? scanNative() : scanWeb());
