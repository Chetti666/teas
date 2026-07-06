/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#F5F0EB',
        ink: '#000000',
        muted: '#6B6258',
        stone: '#D4CEC6',
        accent: '#8B7E74',
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        brush: '4px 4px 0px 0px #1A1A1A',
        'brush-lg': '6px 6px 0px 0px #1A1A1A',
        subtle: '0 4px 24px rgba(26,26,26,0.08), 0 2px 8px rgba(26,26,26,0.06)',
        'subtle-lg': '0 8px 40px rgba(26,26,26,0.10), 0 4px 16px rgba(26,26,26,0.08)',
        frame: 'inset 0 0 0 1px rgba(26,26,26,0.06)',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-slow': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        reveal: 'reveal 0.7s ease-out forwards',
        'reveal-slow': 'reveal-slow 0.9s ease-out forwards',
        fade: 'fade 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
