import "./globals.css";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata = {
  title: "CamSpot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${opensans.variable}`}>
      {/* ⬇️ Set Open Sans as the default font for all pages */}
      <body className="font-opensans">{children}</body>
    </html>
  );
}
