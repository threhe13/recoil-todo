import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Gowun_Dodum } from "@next/font/google";

const gowunDodum = Gowun_Dodum({
  subsets: ["korean"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gowunDodum.className}>
      <Component {...pageProps} />;
    </main>
  );
}
