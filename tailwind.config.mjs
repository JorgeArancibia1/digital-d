/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundSize: {
        '200%*2': '200% 200%',
      },
      animation: {
        Movecolor: 'MoveColor 5s linear infinite alternate',
      },
      keyframes: {
        MoveColor: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '100% 100%' },
        },
      },
    },
  },
  plugins: [],
};
