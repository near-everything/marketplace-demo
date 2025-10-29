import tailwindcss from "@tailwindcss/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    devtools() as any,
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
      router: {
        entry: "./router.tsx",
      },
    }),
    nitroV2Plugin({
      preset: "bun",
      externals: {
        external: ['@noble/hashes', '@noble/curves'],
      },
      compatibilityDate: "latest"
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
