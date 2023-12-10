import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["**/*"],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Rosha Pharmacy",
        short_name: "Rosha",
        start_url: "https://crm.roshapharmacy.com/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        description: "Rosha Pharmacy Customer Relationship Management System",
        icons: [
          {
            src: "https://crm.roshapharmacy.com/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://crm.roshapharmacy.com/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "https://crm.roshapharmacy.com/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "https://crm.roshapharmacy.com/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "https://crm.roshapharmacy.com/maskable-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "https://crm.roshapharmacy.com/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "https://crm.roshapharmacy.com/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/");
            },
            handler: "CacheFirst" as const,
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    legacy(),
  ],
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "./public"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@middlewares": path.resolve(__dirname, "./src/middlewares"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
  define: {
    "process.env": {},
  },
  build: {
    outDir: "./dist/",
    emptyOutDir: true,
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "./src/setupTests.ts",
  // },
});
