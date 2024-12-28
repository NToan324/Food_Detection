/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    colors: {
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#FF9D04",
      "yellow-light": "#FEFCF5",
      "gray-dark": "#90908F",
      gray: "#efefef",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      boxShadow: {
        "custom-light": "5px 10px 20px 15px rgba(255,157,3,0.15)",
        "custom-dark": "0 4px 20px 2px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    screens: {
      phone: { min: "360px", max: "767px" }, // Điện thoại
      tablet: { min: "768px", max: "1023px" }, // Tablet
      desktop: { min: "1024px" }, // Máy tính
    },
  },
};
