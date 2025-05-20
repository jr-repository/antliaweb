import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/ 
export default defineConfig(({ mode }) => ({
  // Base URL untuk deploy di GitHub Pages
  base: mode === 'production' ? './' : '/', 

  // Server config
  server: {
    host: "::",
    port: 8080,
  },

  // Plugins
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean), // Filter agar plugin undefined tidak ikut

  // Alias path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build options (opsional)
  build: {
    outDir: 'dist', // Default, bisa diubah jika perlu
  }
}));