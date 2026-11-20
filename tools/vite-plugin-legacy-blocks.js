/**
 * Serves and emits the legacy blocks in src/legacy as *classic* scripts and
 * plain stylesheets, keeping them exactly where index.html references them.
 *
 * Why not let Vite bundle them? The legacy code relies on classic-script
 * semantics: top-level declarations are shared globals across blocks, inline
 * onclick="..." handlers call them by name, and each block runs at its exact
 * position during HTML parsing (CSS cascade order matters too, because some
 * blocks inject <style> into <head> at runtime). Turning them into ES modules
 * would change all of that, so until a block is migrated to src/ as a real
 * module it is shipped as-is, only content-hashed for cache busting.
 *
 * index.html references them as /legacy/<file> with a `data-legacy` attribute.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const TYPES = { '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };

export default function legacyBlocks({ dir = 'src/legacy', urlPrefix = '/legacy/' } = {}) {
  let config;
  const legacyDir = () => path.resolve(config.root, dir);

  /** fileName (relative to outDir) for a legacy file, stable for a given content. */
  const outName = (file) => {
    const src = fs.readFileSync(path.join(legacyDir(), file));
    const hash = crypto.createHash('sha256').update(src).digest('hex').slice(0, 8);
    const ext = path.extname(file);
    return { fileName: `${config.build.assetsDir}/legacy/${path.basename(file, ext)}-${hash}${ext}`, src };
  };

  const tagRe = new RegExp(
    `(<(?:script|link)\\b[^>]*?(?:src|href)=")${urlPrefix}([^"?#]+)("[^>]*\\bdata-legacy\\b[^>]*>)`,
    'g',
  );

  return {
    name: 'legacy-blocks',

    configResolved(c) {
      config = c;
    },

    configureServer(server) {
      server.middlewares.use(urlPrefix, (req, res, next) => {
        const file = decodeURIComponent((req.url || '').split('?')[0]).replace(/^\/+/, '');
        const full = path.resolve(legacyDir(), file);
        if (!full.startsWith(legacyDir() + path.sep) || !fs.existsSync(full)) return next();
        res.setHeader('Content-Type', TYPES[path.extname(full)] || 'application/octet-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.end(fs.readFileSync(full));
      });
      // Full reload when a legacy block changes (no HMR possible for globals).
      server.watcher.add(legacyDir());
      server.watcher.on('change', (f) => {
        if (path.resolve(f).startsWith(legacyDir())) server.ws.send({ type: 'full-reload' });
      });
    },

    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (config.command !== 'build') return html;
        return html.replace(tagRe, (_, pre, file, post) => `${pre}${config.base}${outName(file).fileName}${post}`);
      },
    },

    generateBundle() {
      for (const file of fs.readdirSync(legacyDir())) {
        if (!TYPES[path.extname(file)]) continue;
        const { fileName, src } = outName(file);
        this.emitFile({ type: 'asset', fileName, source: src });
      }
    },
  };
}
