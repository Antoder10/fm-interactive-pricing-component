module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: []
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'soft-cyan': 'hsl(174, 77%, 80%)',
        'strong-cyan': 'hsl(174, 86%, 45%)',
        'light-grayish-red': 'hsl(14, 92%, 95%)',
        'light-red': 'hsl(15, 100%, 70%)',
        'pale-blue': 'hsl(226, 100%, 87%)',
        'very-pale-blue': 'hsl(230, 100%, 99%)',
        'light-grayish-blue': 'hsl(224, 65%, 95%)',
        'light-grayish-blue-bg': 'hsl(223, 50%, 87%)',
        'grayish-blue': 'hsl(225, 20%, 60%)',
        'dark-desaturated-blue': 'hsl(227, 35%, 25%)'

      },
      backgroundImage: theme => ({
        'pattern': "url('/src/images/bg-pattern.svg')",
      })
    },
  },
  variants: {},
  plugins: [],
}
