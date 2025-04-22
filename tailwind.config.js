/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6ffee',
          100: '#b3ffd6',
          200: '#80ffbe',
          300: '#4dffa6',
          400: '#1aff8e',
          500: '#00e673',
          600: '#00cc66',
          700: '#00b359',
          800: '#00994d',
          900: '#006633',
        },
        secondary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80bfff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0073e6',
          600: '#0066cc',
          700: '#0059b3',
          800: '#004d99',
          900: '#003366',
        },
        accent: {
          50: '#e6fbf9',
          100: '#b3f1ec',
          200: '#80e8df',
          300: '#4dded2',
          400: '#1ad4c5',
          500: '#00bfb3',
          600: '#00a699',
          700: '#008c80',
          800: '#007366',
          900: '#004c44',
        },
        dark: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
          950: '#080808',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.8)), url("https://images.pexels.com/photos/7688334/pexels-photo-7688334.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        'eco-pattern': 'linear-gradient(to bottom, rgba(0, 102, 51, 0.8), rgba(13, 13, 13, 0.9)), url("https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      },
    },
  },
  plugins: [],
};