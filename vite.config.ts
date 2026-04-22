import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/react-markdown/") || id.includes("/node_modules/remark-gfm/")) {
            return "markdown";
          }

          if (id.includes("/node_modules/react-router-dom/")) {
            return "router";
          }

          if (id.includes("/node_modules/react-icons/")) {
            return "icons";
          }

          if (id.includes("/node_modules/react/") || id.includes("/node_modules/react-dom/")) {
            return "react-vendor";
          }

          return undefined;
        },
      },
    },
  },
});
