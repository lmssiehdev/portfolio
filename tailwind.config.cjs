/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darker: "hsl(var(--primary-730))",
        background: "var(--background-primary)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
        },
        muted: {
          DEFAULT: "var(--muted)",
        },
        green: {
          100: "hsl(var(--green-100))",
          150: "hsl(var(--green-150))",
          200: "hsl(var(--green-200))",
          250: "hsl(var(--green-250))",
          300: "hsl(var(--green-300))",
          345: "hsl(var(--green-345))",
          350: "hsl(var(--green-350))",
          400: "hsl(var(--green-400))",
          450: "hsl(var(--green-450))",
          500: "hsl(var(--green-500))",
          550: "hsl(var(--green-550))",
          600: "hsl(var(--green-600))",
          650: "hsl(var(--green-650))",
          700: "hsl(var(--green-700))",
          750: "hsl(var(--green-750))",
          800: "hsl(var(--green-800))",
          850: "hsl(var(--green-850))",
          900: "hsl(var(--green-900))",
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
