import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSpritePlugin({
      symbolId: "icon-[name]", // буде доступно як #icon-logo
      include: ["src/assets/Icon"], // шлях до ваших SVG
    }),
  ],
  build: {
    sourcemap: true,
  },
});
