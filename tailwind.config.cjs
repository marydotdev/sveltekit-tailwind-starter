/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'brushed-alum': 'url(https://www.transparenttextures.com/patterns/brushed-alum.png)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'funky-stripes':
					'url(https://www.toptal.com/designers/subtlepatterns/uploads/repeated-square.png)'
			},
			colors: {
				branddark: '#162d4f',
				brandlight: '#18a4b3',
				darkblue: '#001724'
			},
			fontFamily: {
				spacemono: ['Space Mono', 'monospace']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp')
	]
};
