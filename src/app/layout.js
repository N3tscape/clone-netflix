import GlobalState from "../context";
import NextAuthProvider from "../auth-provider";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clone Netflix",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
