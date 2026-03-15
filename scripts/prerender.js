/**
 * Post-build prerender script.
 * 
 * 1. Imports the SSR-bundled entry-server module
 * 2. Calls render() to get the HTML string  
 * 3. Replaces <!--ssr-outlet--> in dist/index.html with the rendered content
 * 
 * Usage: node scripts/prerender.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  const distPath = path.resolve(root, 'dist');
  const htmlPath = path.resolve(distPath, 'index.html');

  // Read the built HTML template
  let html = fs.readFileSync(htmlPath, 'utf-8');

  // Import the SSR-built entry module (use file:// URL for Windows compatibility)
  const ssrModulePath = path.resolve(root, 'dist-server', 'entry-server.js');
  const { render } = await import(
    pathToFileURL(ssrModulePath).href
  );

  // Render the React app to string
  const appHtml = render();

  // Replace the SSR outlet placeholder with rendered HTML
  html = html.replace('<!--ssr-outlet-->', appHtml);

  // Write the prerendered HTML back
  fs.writeFileSync(htmlPath, html, 'utf-8');

  console.log('✅ Prerendered index.html successfully!');
  console.log(`   HTML size: ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);

  // Clean up the SSR build artifacts (non-fatal on Windows lock issues)
  try {
    fs.rmSync(path.resolve(root, 'dist-server'), { recursive: true, force: true });
    console.log('🧹 Cleaned up dist-server/');
  } catch {
    console.warn('⚠️  Could not clean dist-server/ (may be locked). You can delete it manually.');
  }
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
