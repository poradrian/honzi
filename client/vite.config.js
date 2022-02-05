import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS({
      scan: {
        dirs: ['project/**/*'],
        fileExtensions: ['js', 'jsx'],
        include: ['./windi.config.js'],
        exclude: ['node_modules', '.git'],
      },
    }),
  ],
});