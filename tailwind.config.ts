// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',
    content: [
        './app/**/*.{js,vue,ts}',
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                // Custom light mode colors
                primary: {
                    50: '#caf0f8',
                    100: '#ade8f4',
                    200: '#90e0ef',
                    300: '#48cae4',
                    400: '#00b4d8',
                    500: '#0096c7',
                    600: '#0077b6',
                    700: '#023e8a',
                    800: '#1d3557',
                    900: '#03045e',
                },
                accent: {
                    50: '#ffea00',
                    100: '#ffdd00',
                    200: '#ffcc00',
                    300: '#ffbb00',
                    400: '#ffaa00',
                    500: '#ff9900',
                    600: '#ff8800',
                    700: '#ff7700',
                    800: '#ff6600',
                    900: '#ff5500',
                },
                // Dark mode specific colors
                dark: {
                    bg: {
                        primary: '#0a0a0a',
                        secondary: '#141414',
                        tertiary: '#1e1e1e',
                        hover: '#252525',
                    },
                    text: {
                        primary: '#f5f5f5',
                        secondary: '#a3a3a3',
                        muted: '#737373',
                    },
                    border: {
                        primary: '#2a2a2a',
                        secondary: '#3a3a3a',
                    }
                },
                light: {
                    bg: {
                        primary: '#ffffff',
                        secondary: '#f9fafb',
                        tertiary: '#f3f4f6',
                        hover: '#e5e7eb',
                    },
                    text: {
                        primary: '#0a0a0a',
                        secondary: '#525252',
                        muted: '#737373',
                    },
                    border: {
                        primary: '#e5e7eb',
                        secondary: '#d1d5db',
                    }
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
} satisfies Config