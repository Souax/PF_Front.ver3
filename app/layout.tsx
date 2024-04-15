import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

const shippori_Mincho = Shippori_Mincho({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "新Bookers",
  description:
    "Webエンジニアのための技術書データベースサイトです。最新のトレンドから古典的な名著まで、幅広いテーマを網羅しています。新しい知識とスキルを身につけ、あなたのキャリアを次のレベルに引き上げましょう！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div
          className={`min-h-screen ${shippori_Mincho.className} bg-[#2E2E2E]`}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
