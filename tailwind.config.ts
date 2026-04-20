import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "925px",
      xl: "1440px",
    },
    rotate: {
      "90": "90deg",
    },
    colors: {
      primary: "#15214B",
      //  primary: "#1E3A8A",
      //  "primary-new-light":"#00559b",
      "primary-new-light":"#00559b",
      
       "primary-new-dark":"#012A57",
      // secondary: "#FFC634",
      secondary: "#fecd46",
      // secondary: "#F59E0B",
      "dark-blue": "#15214B",
      "link-blue": "#2563eb",
      transparent: "#24346b",
      blackTrans:'#3334456c',
      gray: "#F3F4F4",
      "gray-dark": "#C6C6C6",
      "bg-black": "#2B2727",
      gradientL: "#090B32",
      gradientR: "#121452",
      whiteCol: "#ffffff",
      goldColor: "#BDA589",
      pink:'#EA436E',
      seaGreen:'#4599a4',
      danger: "#e3342f",
       danger1: "#fecd46",
      warning: "#f6993f",
      success: "#38c172",
      info: "#3490dc",
      
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
        animation: {
      "spin-slow": "spin 2s ease-out",
    },
    },
  },
  plugins: [],
};

export default config;
