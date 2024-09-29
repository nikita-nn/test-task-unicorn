import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
    }),
  ],
  build: {
    minify: true,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[hash].js",
        manualChunks: {
          react: ["react"],
          reactDom: ["react-dom"],
          viem: ["viem"],
          wagmi: ["wagmi"],
          wagmiCore: ["@wagmi/core"],
          remixRunRouter: ["@remix-run/router"],
          reactRouter: ["react-router"],
          zustand: ["zustand"],
        },
      },
    },
  },
});
