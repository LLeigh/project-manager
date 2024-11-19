import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "var(--color-primary)",
        dark: "var(--color-primary-dark)"
      },
      secondary: "var(--color-secondary)",
      tertiary: {
        DEFAULT: "var(--color-tertiary)",
        light: "var(--color-tertiary-light)"
      },
      focus: "var(--color-focus)",
      gray: "var(--color-gray)",
      black: "var(--color-black)",
      white: "var(--color-white)",
      transparent: "var(--color-transparent)"
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      fontFamily: {
        'support': "var(--font-support)",
        'sans': "var(--color-sans)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config