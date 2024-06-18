/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-blue": {
          primary: '#0C0C81',
          65: 'rgba(12,12,129,0.65)',
          75: 'rgba(12,12,129,0.65)'
          
        },
        "c-gold": {
          primary: '#FFF996',
          shine: '#FFF996',
          soft: '#ECEAC6',
          transparent: 'rgba(236,234,198,0.8)'
        },
        "c-brown": {
          primary: '#2F2204',
          transparent: 'rgba(47,34,4,0.4)'
        },
        "c-gray-blue": {
          primary: '#9696FF',
          transparent: 'rgba(150,150,255,0.3)'
        } 
        

      },
    },
    plugins: [],
  }

}

