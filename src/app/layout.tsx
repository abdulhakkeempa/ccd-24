import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const productSans = localFont({
  src: [
    {
      path: "./fonts/ProductSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/ProductSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/ProductSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/ProductSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-product-sans",
});


export const metadata: Metadata = {
  title: "Google Cloud Community Day 2024",
  description: "Google Cloud Community Day Kochi 2024: An amalgamation of innovation, development, and collaboration. Join us for a day of expert-led talks, hands-on workshops, and interactive activities to learn about the latest cloud technologies, trends, and best practices. Network with fellow cloud professionals and build relationships for your growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${productSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
