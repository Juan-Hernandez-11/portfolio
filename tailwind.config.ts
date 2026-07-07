import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta teal/esmeralda (conecta con la marca MD Science & Technology)
        base: {
          DEFAULT: "#08171A", // fondo profundo
          800: "#0C2226",
          700: "#103036",
        },
        surface: "#0F2A2E",
        mist: "#E8F1EF", // texto claro
        fog: "#8FA8A4", // texto secundario (verde-gris)
        emerald: {
          DEFAULT: "#34D399",
          600: "#10B981",
        },
        teal: "#2DD4BF",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: { content: "1120px" },
    },
  },
  plugins: [],
};

export default config;
