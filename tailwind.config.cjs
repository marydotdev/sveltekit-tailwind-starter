const colors = require('tailwindcss/colors')

module.exports= {
    mode: 'jit',
    darkMode: 'class',
    purge: ['./src/**/*.svelte'],
    plugins: [
        require('@tailwindcss/typography'),
        // ...
      ],
    variants: {
      extend: {
        animation: ['hover']
      }
    },
      theme: {
        extend: {
          colors: {
            dark: '#1D1D1D',
            light: '#F6F6F6',
            transparent: 'transparent',
            current: 'currentColor',
            sky: colors.sky,
            cyan: colors.cyan,
            amber: colors.amber,
            emerald: colors.emerald,
            lime: colors.lime,
          },
        },
      },
};