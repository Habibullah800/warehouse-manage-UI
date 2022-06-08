module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#183a1d",

          "secondary": "#fefbe9",

          "accent": "#f6c453",

          "neutral": "#e1eedd",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}


