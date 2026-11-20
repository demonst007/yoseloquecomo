/**
 * Implements the claude.ai `downloads` capability: save({ filename, data: Blob }).
 * Web: regular browser download. Native (Capacitor) support is added in native.js.
 */
export const downloads = {
  async save({ filename, data }) {
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
