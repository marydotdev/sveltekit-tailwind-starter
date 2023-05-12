/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'dot-grid': 'url(https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png)'
			},
			colors: {
				svelte: '#FF3E00',
				tw: '#06B6D4'
			},
			fontFamily: {
				spacemono: ['Space Mono', 'monospace']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	]
};
