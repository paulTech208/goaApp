/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        white_1: "#f7f8ff",
        blue: "#4781FF",
        black_1: "#b2b2b2",
        black_2: "#eeeeee",
        black_3: '#7f7f7f',
        red: "#fd565c",
        green: "#40ad72",
        purple: "#ec4cdf",
        yellow: "#ffa82e",
        blue2: "#6da7f4",
        red2: "#fa574a",
      },
      container: {},
      extend: {
        fontFamily: {},
        backgroundImage: {},
        backgroundColor: {},
        boxShadow: {},
        screens: {
          'ios': "320px",
          'samsungS8': "360px",
          'xs': "390px",
          'sm': "640px",
          'md': "768px",
        },
      },
    },
  },
  plugins: [],
};
