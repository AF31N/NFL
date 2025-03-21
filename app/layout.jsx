import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'], variable: '--font-jetbrainsMono' });

export const metadata = {
  title: "Noufal's | Personal Portfolio",
  description: "Noufal Business Consultant With 10+ Years Of Experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
