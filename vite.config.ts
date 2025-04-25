import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), tsconfigPaths(), process.env.HTTPS && mkcert()],
    server: {
        host: true,
    },
    build: {
        target: "esnext",
        outDir: "build",
    },
});
