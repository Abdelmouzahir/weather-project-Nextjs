import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "The Weather App 🌤",
  description: "Weather app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
