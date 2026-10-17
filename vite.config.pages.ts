// Build config used only for GitHub Pages (see .github/workflows/deploy.yml).
// The normal Lovable build keeps using vite.config.ts.
// Site is served from the custom domain www.qimmatbulutu.com, so base is "/".
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "/" },
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
  },
});
