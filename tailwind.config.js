/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'keagan-henman1': "url('public/img/keagan-henman.jpg')",
        'keagan-henman2': "url('public/img/keagan-henman-x.jpg')",
        'shirt-1': "url('public/img/tshirt-1.JPG')",
      },
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
      fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
			 },
    },
  },
  plugins: [],
}
