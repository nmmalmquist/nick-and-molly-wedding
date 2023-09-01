/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#96B6C5',
			secondary: '#ADC4CE',
			tertiary: '#EEE0C9',
			quaternary: '#F1F0E8',
			black: '#000000',
			white: '#FFFFFF',
			transparent: 'transparent',
			// The gray used for the disabled input
			disabled: '#F3F5F5'
		},
		fontSize: {
			'3xs': ['0.625rem', '1.6'],
			'2xs': ['0.75rem', '1.6666666666666667'],
			xs: ['0.875rem', '1.5714285714285714'],
			sm: ['1rem', '1.5'],
			base: ['1.125rem', '1.3888888888888888'],
			lg: ['1.25rem', '1.4'],
			xl: ['1.5rem', '1.3333333333333333'],
			'2xl': ['1.875rem', '1.2666666666666666'],
			'3xl': ['2.375rem', '1.2105263157894737'],
			'4xl': ['2.875rem', '1.173913043478261'],
			'5xl': ['3.5rem', '1.1428571428571428'],
			'6xl': ['5rem', '1.5']
		},
		extend: {}
	},
	plugins: []
};
