// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chino Medical Group",
  description:
    "Comprehensive, compassionate care for your family in Chino, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-[#f6f6f6] text-gray-800">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
