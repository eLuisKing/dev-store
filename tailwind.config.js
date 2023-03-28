/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#0A2647',
        'secund': '#144272',
        'third': '#205295',
        'base': '#2C74B3',
        'backg': '#e2e8f0'
			}),
      textColor:{
				'text-1': '#e2e8f0',
        'text-2': '#0f172a',
			},
    },
  },
  plugins: [],
}
