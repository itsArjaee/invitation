import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MainPage = dynamic(() => import("../src/modules/Main"));

export default function Home() {
  return <MainPage />;
}
