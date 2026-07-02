/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#F5F0EB',
        ink: '#1A1A1A',
        muted: '#6B6258',
        stone: '#D4CEC6',
        accent: '#8B7E74',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brush: '4px 4px 0px 0px #1A1A1A',
        'brush-lg': '6px 6px 0px 0px #1A1A1A',
      },
    },
  },
  plugins: [],
}
