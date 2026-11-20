import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { isNative } from './native.js';

const blobToBase64 = (blob) =>
  new Promise((ok, ko) => {
    const r = new FileReader();
    r.onerror = () => ko(r.error);
    r.onload = () => ok(String(r.result).slice(String(r.result).indexOf(',') + 1));
    r.readAsDataURL(blob);
  });

/**
 * Implements the claude.ai `downloads` capability: save({ filename, data: Blob }).
 * Web: regular browser download. Native: writes the file to the cache and opens
 * the share sheet (save to Files/Drive, send by WhatsApp, e-mail...).
 */
export const downloads = {
  async save({ filename, data }) {
    if (isNative) {
      const { uri } = await Filesystem.writeFile({
        path: filename,
        data: await blobToBase64(data),
        directory: Directory.Cache,
      });
      await Share.share({ title: filename, files: [uri] });
      return;
    }
    const url = URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
  },
};
