/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      'loginpage':"url(../public/loginbg.jpg)",
      'home':"url(../public/home.jpg)"
    }
  },
  plugins: [],
}
