/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js, jsx}",
    './src/components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E"
      },
      backgroundImage: {
        "image": "url('/src/assets/background.jpg')",
      }
    },
  },
  plugins: [],
}

