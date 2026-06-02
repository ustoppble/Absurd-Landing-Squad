import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "'Arial Narrow'", 'Arial', 'sans-serif'],
        heading: ["'Instrument Sans'", "'Trebuchet MS'", "'Helvetica Neue'", 'sans-serif'],
        body: ["'Raleway'", "'Gill Sans'", "'Gill Sans MT'", "'Segoe UI'", 'sans-serif'],
        ui: ["'Inter'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', 'sans-serif'],
      },
      colors: {
        accent: '#FFFF00',
        'accent-alt': '#FEFF00',
        'bg-page': '#000000',
        'bg-surface': '#121212',
        'bg-header': '#FFFFFF',
        'bg-match-upcoming': '#FFFDFD',
        'bg-match-past': '#F9FAFB',
        'border-dashed': '#41413B',
        'border-header-line': '#D2D5D9',
        'text-primary': '#FFFFFF',
        'text-muted': '#888888',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px',
        dot: '50%',
      },
      maxWidth: {
        container: '1400px',
      },
      keyframes: {
        logoScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        badgePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        hoverArrow: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        'logo-scroll': 'logoScroll 30s linear infinite',
        'badge-pulse': 'badgePulse 1.5s ease infinite',
        'scroll-down': 'scrollDown 2s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
