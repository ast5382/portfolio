import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";



export const metadata = {
  title: "Anisa's Portfolio",
  description: "Welcome to my portfolio website!",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider > */}
     
          {children}
        {/* </ThemeProvider> */}
       
      </body>
    </html>
  );
}
