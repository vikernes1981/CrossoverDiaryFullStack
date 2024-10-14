import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests from the frontend to the backend
      "/api": {
        target: "http://localhost:3000", // Your backend API server
        changeOrigin: true, // Ensures the origin is changed to the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Optionally rewrite the path
      },
    },
  },
});
