import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--color-ink-soft) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-blue": "rgb(var(--color-surface-blue) / <alpha-value>)",
        "lumko-blue": "rgb(var(--color-lumko-blue) / <alpha-value>)",
        "lumko-blue-soft": "rgb(var(--color-lumko-blue-soft) / <alpha-value>)",
        "lumko-blue-dark": "rgb(var(--color-lumko-blue-dark) / <alpha-value>)",
        "sovereign-gold": "rgb(var(--color-sovereign-gold) / <alpha-value>)",
        "sovereign-gold-dark": "rgb(var(--color-sovereign-gold-dark) / <alpha-value>)",
        "sovereign-gold-soft": "rgb(var(--color-sovereign-gold-soft) / <alpha-value>)",
        deep: "rgb(var(--color-deep) / <alpha-value>)",
        "deep-2": "rgb(var(--color-deep-2) / <alpha-value>)",
        midnight: "rgb(var(--color-midnight) / <alpha-value>)",
        action: "rgb(var(--color-action) / <alpha-value>)",
        "action-dark": "rgb(var(--color-action-dark) / <alpha-value>)"
      },
      boxShadow: {
        calm: "0 18px 50px rgb(var(--color-ink) / 0.08)",
        premium: "0 28px 80px rgb(var(--color-ink) / 0.14)",
        glow: "0 0 0 1px rgb(var(--color-lumko-blue) / 0.08), 0 24px 70px rgb(var(--color-lumko-blue) / 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
