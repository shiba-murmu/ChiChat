import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   darkMode: "class",
   content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // adjust based on our project
   theme: {
    extend: {},
  },
  plugins: [react(), tailwindcss()],
});
