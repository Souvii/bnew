/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'download1': "url('/components/download.jpg')", 
        'download2': "url('/components/download2.jpg')",
        'download3': "url('/components/download3.jpg')",
        'download4': "url('/components/download5.jpg')",
        'download6': "url('/components/d6.jpg')",
        'download7': "url('/components/dnew.jpg')",
      }
    },
  },
  plugins: [],
}

