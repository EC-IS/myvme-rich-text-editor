import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      entry: "./src/components/MyVMERichTextEditor.tsx",
      name: "MyVMERichTextEditor",
      formats: ["es", "umd"],
      fileName: (format) => `myvme-rich-text-editor.${format}.js`,
    },
    // Rollup options if needed
    rollupOptions: {
      // Externalize peer dependencies
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
