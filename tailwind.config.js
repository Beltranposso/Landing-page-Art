

// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    width: {
      '128': '55rem',
    }, height: {
      '95%': '95%',
      '25%': '20%',
      '40%': '40%'
    },
    keyframes: {
      from: {
        opacity: 0,
         scale: 0.5
      },to:{
        opacity: 1,
        scale: 1
      },
      animation: {
        scroll: 'apear 0.5s linear view entry 0 cover 30%',
      }
      
    }
  },
};
export const darkMode = "class";
export const plugins = [nextui()];

