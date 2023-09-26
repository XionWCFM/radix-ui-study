import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "neutral-100": "#2C2932",
      "neutral-60": "rgba(44, 41, 50, 0.60);",
      "neutral-30": "rgba(44, 41, 50, 0.30);",
      "neutral-20": "rgba(44, 41, 50, 0.20);",
      "neutral-10": "rgba(44, 41, 50, 0.10);",
      "gray-700": "#455268",
      "gray-500": "#718096",
      "gray-400": "#91A3BD",
      "gray-300": "#C9D8E9",
      "gray-200": "#DAE6F3",
      "gray-100": "#F4F9FF",
      "primary-100": "#8732F4",
      "primary-60": "#AC8CF1",
      "primary-30": "#C0B7F5",
      "primary-20": "#DADAFF",
      "primary-10": "#E9E9FF",
      white: "#FFFFFF",
      error: "#FF6C58",
      "error-10": "#FFF0EE",
      success: "#36F",
      "success-10": "#EBF0FF",
    },
    boxShadow: {
      default: `0px 0px 20px 0px rgba(0, 0, 0, 0.1);`,
      gray: `0px 0px 10px 0px #E4ECF5`,
      primary: `0px 0px 15px 0px #F0E7FB`,
    },
    keyframes: {
      overlayShow: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      contentShow: {
        from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
        to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
      },
      toastShow: {
        from: { transform: "translate(0,100%)" },
        to: { transform: "translate(0,0)" },
      },
      hide: {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },
      slideIn: {
        from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        to: { transform: "translateX(0)" },
      },
      swipeOut: {
        from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
        to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
      },
    },
    extend: {
      animation: {
        overlayShow: "overlayShow 500ms ease-in",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        toastShow: "toastShow 500ms ease-in",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
