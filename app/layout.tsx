import type { Metadata } from "next";
import "./globals.css";

// local font
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/fonts/iran-sans-web.woff2" });

// components
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatActionButton from "@/components/FloatActionButton";
import DrawerCall from "@/components/DrawerCall";

export const metadata: Metadata = {
  title: "  جراح متخصص عمل بینی | دکتر آرمین اکبری",
  description:
    "دکتر آرمین اکبری متخصص گوش و حلق و بینی و جراحی زیبایی صورت و بینی، سینوس و اندوسکوپی، جراحی‌های اختلالات خواب و خروپف، جراحی‌های پروتز صورت، بوتاکس و تزریق فیلر، جراحی‌های سر و گردن، تیرویید و غدد بزاغی هستند. ایشان از دکترای عمومی دانشگاه قزوین در سال ۱۳۹۲ فارغ التحصیل شدند و پس از آن دوره تخصص خود را در رشته گوش، حلق و بینی و جراحی سر و گردن در دانشگاه تهران آغاز نمودند. دکتر اکبری بورد تخصصی خود را از دانشگاه تهران دریافت کردند و در حال حاضر در قزوین و تهران مشغول به فعالیت هستند. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={myFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <FloatActionButton />
          <DrawerCall />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
