import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1584px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"IBM Plex Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'monospace'],
				plex: ['"IBM Plex Sans"', 'sans-serif'],
			},
			letterSpacing: {
				carbon: '0.16px',
				'carbon-caption': '0.32px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					hover: '#0353e9',
					pressed: '#002d9c',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				info: 'hsl(var(--info))',
				// Carbon specific tokens
				canvas: '#ffffff',
				'surface-1': '#f4f4f4',
				'surface-2': '#e0e0e0',
				hairline: '#e0e0e0',
				'hairline-strong': '#161616',
				ink: '#161616',
				'ink-muted': '#525252',
				'ink-subtle': '#8c8c8c',
				'inverse-canvas': '#161616',
				'inverse-surface-1': '#262626',
				'inverse-ink': '#ffffff',
				'inverse-ink-muted': '#c6c6c6',
				'blue-60': '#0043ce',
				'blue-80': '#002d9c',
				'blue-hover': '#0353e9',
				'semantic-success': '#24a148',
				'semantic-warning': '#f1c21b',
				'semantic-error': '#da1e28',
				'semantic-info': '#0f62fe',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				none: '0px',
				DEFAULT: '0px',
				xs: '2px',
				sm: '4px',
				md: '6px',
				lg: '8px',
				pill: '9999px'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
