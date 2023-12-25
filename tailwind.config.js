/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'openSans': ['"Open Sans"'],
      'audiowide': ['Audiowide'],
      'marcellus': ['"Marcellus SC"'],
    },
    screens: {
      'max1439' : {'max' : '1439px'},
      'max1370' : {'max' : '1370px'},
      'max1300' : {'max' : '1300px'},
      'max1200' : {'max' : '1200px'},
      'max1150' : {'max' : '1150px'},
      'max1080' : {'max' : '1080px'},
      'max1050' : {'max' : '1050px'},
      'max1000' : {'max' : '1000px'},
      'max950' : {'max' : '950px'},
      'max900' : {'max' : '900px'},
      'max850' : {'max' : '850px'},
      'max800' : {'max' : '800px'},
      'max750' : {'max' : '750px'},
      'max700' : {'max' : '700px'},
      'max650' : {'max' : '650px'},
      'max600' : {'max' : '600px'},
      'max550' : {'max' : '550px'},
      'max500' : {'max' : '500px'},
      'max450' : {'max' : '450px'},
      'max400' : {'max' : '400px'},
      'max385' : {'max' : '385px'},
    },
    extend: {},
  },
  plugins: [],
}

