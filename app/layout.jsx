import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Farhane X Dev",
  description: "Portfolio Développeur Web Fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${outfit.className} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#212529]">
        {children}
      </body>
    </html>
  );
}
