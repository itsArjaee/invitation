import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return(
<div className="relative min-h-screen overflow-y-auto flex justify-center items-start">
  {/* Background Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm z-0"
    style={{
      backgroundImage: "url('/images/bf-forest.jpg')",
      backgroundAttachment: "fixed",
    }}
  />

  {/* Foreground Content */}
  <div className="relative z-10 w-full m-1">
    <Component {...pageProps} />
  </div>
</div>
  );
}
