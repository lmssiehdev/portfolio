/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-primary)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
        },
        muted: {
          DEFAULT: "var(--muted)",
        },
      },
      // borderRadius: {
      //   xl: `calc(var(--radius) + 4px)`,
      //   lg: `var(--radius)`,
      //   md: `calc(var(--radius) - 2px)`,
      //   sm: "calc(var(--radius) - 4px)",
      // },
    },
  },
  plugins: [],
};
