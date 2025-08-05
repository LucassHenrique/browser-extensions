// src/app/fonts.ts
import localFont from "next/font/local";

// Fontes estáticas
export const notoSans = localFont({
  src: [
    {
      path: "../fonts/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans",
  display: "swap",
});

// Fonte variável (normal)
export const notoSansVariable = localFont({
  src: [
    {
      path: "../fonts/NotoSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans-variable",
  display: "swap",
});

// Fonte variável (itálico)
export const notoSansVariableItalic = localFont({
  src: [
    {
      path: "../fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-noto-sans-variable-italic",
  display: "swap",
});
