import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BgProvider from "@/app/providers/bgprovider";
import SleepScreen from "@/components/Taskbar/StartMenu/sleepscreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reketino's Portfolio",
  description:
    "Welcome to Reketino's personal portfolio website, showcasing projects, skills, and experiences in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SleepScreen />

        <BgProvider>{children}</BgProvider>
      </body>
    </html>
  );
}
