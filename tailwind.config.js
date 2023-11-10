/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "firstPicture": "./src/assets/image-product-1.jpg",
        "secondPicture": "./src/assets/image-product-2.jpg",
        "thirdPicture":  "./src/assets/image-product-3.jpg",
        "fourthPicture":  "./src/assets/image-product-4.jpg"
      },
      boxShadow: {
        "2xl": "0px 20px 50px -20px #FF7E1B",
      }
    },
  },
  plugins: [],
}
