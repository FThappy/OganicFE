import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        green: {
          soft: 'hsl(var(--soft-primary-green))',
          DEFAULT: 'hsl(var(--primary-green))',
          hard: 'hsl(var(--hard-primary-green))'
        },
        warning: 'hsl(var(--warning))',
        danger: 'hsl(var(--danger))',
        gray: {
          '0': 'hsl(var(--gray-0))',
          '1': 'hsl(var(--gray-1))',
          '2': 'hsl(var(--gray-2))',
          '3': 'hsl(var(--gray-3))',
          '4': 'hsl(var(--gray-4))',
          '5': 'hsl(var(--gray-5))',
          '6': 'hsl(var(--gray-6))',
          '7': 'hsl(var(--gray-7))',
          '8': 'hsl(var(--gray-8))',
          '9': 'hsl(var(--gray-9))'
        },
        greenGray: {
          '0': 'hsl(var(--green-gray-0))',
          '1': 'hsl(var(--green-gray-1))',
          '2': 'hsl(var(--green-gray-2))',
          '3': 'hsl(var(--green-gray-3))',
          '4': 'hsl(var(--green-gray-4))',
          '5': 'hsl(var(--green-gray-5))',
          '6': 'hsl(var(--green-gray-6))',
          '7': 'hsl(var(--green-gray-7))',
          '8': 'hsl(var(--green-gray-8))',
          '9': 'hsl(var(--green-gray-9))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'white-to-red': {
          '0%': { color: '#F0EFFF' },
          '50%': { color: '#FFEBED' },
          '100%': { color: '#FF2D46' }
        },
        'white-to-green': {
          '0%': { color: 'white' },
          '50%': { color: '#00B207' },
          '100%': { color: '#00B207' }
        },
        'green-to-white': {
          '0%': { color: '#00B207' },
          '50%': { color: 'white' },
          '100%': { color: 'white' }
        },
        'blue-to-white': {
          '0%': { color: '#2388FF' },
          '50%': { color: '#4285F4' },
          '100%': { color: 'white' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'white-to-green': 'white-to-green 0.5s linear forwards',
        'green-to-white': 'green-to-white 0.5s  ease-in-out forwards'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
};
export default config;
