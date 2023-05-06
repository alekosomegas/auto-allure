/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors: {
      dark: "#29253b",
      highlight1: "#e85042",
      highlight2: "#5799bf",
      grey: "#D3D3D3"
    },

    extend: {
      fontFamily: {
        logo: ["Birthstone Bounce, cursive"],
        body: ['Lato', "sans-serif"]
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
