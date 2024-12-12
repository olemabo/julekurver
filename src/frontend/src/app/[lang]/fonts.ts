import localFont from "next/font/local";

export const alegreya = localFont({
  src: [
    {
      path: "../../../public/fonts/Alegreya/Alegreya-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alegreya",
  display: "swap",
});

export const alegreyaSansLight = localFont({
  src: [
    {
      path: "../../../public/fonts/AlegreyaSans/AlegreyaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-alegreya-sans-light",
  display: "swap",
});

export const alegreyaHeader = localFont({
  src: [
    {
      path: "../../../public/fonts/Alegreya/Alegreya-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alegreya-header",
  display: "swap",
});
