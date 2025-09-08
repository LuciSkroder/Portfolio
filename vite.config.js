import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), svgr()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/Portfolio/";
  }

  return config;
});
