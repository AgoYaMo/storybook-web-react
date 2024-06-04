import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/components/index.ts",
      name: "@agoyamo/storybook-web-react",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      exclude: [
        "./src/App.tsx",
        "./src/main.tsx",
        "./src/stories",
        "./src/components/**/*.stories.ts",
        "./src/components/**/*.stories.tsx",
      ],
    }),
  ],
});
