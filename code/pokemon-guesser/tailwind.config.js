/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*",
    "./src/modules/pokemon/view/*",
    "./src/modules/pokemon/components/*",
  ],
  theme: {
    extend: {
      colors: {
        'pkm-grey': '#f1f1f1',
      },
    },
  },
  plugins: [],
}

