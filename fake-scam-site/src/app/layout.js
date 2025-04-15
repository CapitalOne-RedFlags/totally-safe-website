import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: '💸 Best Deals Online 💸',
  description: 'Claim your prize before it’s too late!',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, background: '#fffbe6', fontFamily: 'Comic Sans MS' }}>
        {children}
      </body>
    </html>
  );
}
