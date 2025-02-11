module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a4365',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}