// Build config used only for GitHub Pages (see .github/workflows/deploy.yml).
// The normal Lovable build keeps using vite.config.ts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "/summit-pluto-digital-home/" },
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
  },
});
