import localFont from "next/font/local";
import SmoothScroll from "./components/SmoothScroll";
import PopupForm from "./components/PopupForm";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = localFont({
  src: "./fonts/instrument-serif-latin.woff2",
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata = {
  title: "Onwani Properties - Premium Real Estate",
  description: "Find your perfect habitat so you can comfortably build your future and best life.",
  icons: {
    icon: [
      { url: "/main.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/main.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <SmoothScroll>
          {children}
          <PopupForm />
        </SmoothScroll>
      </body>
    </html>
  );
}
