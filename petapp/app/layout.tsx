import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import BecomeSitterModal from "./components/modals/BecomeSitterModal";
import SearchModal from "./components/modals/SearchModal";
import Footer from "./components/footer/Footer";
import BottomNav from "./components/navbar/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetApp",
  description: "Koleto and Jorkata's pet app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SearchModal />
        <BecomeSitterModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-28 pt-32">{children}</div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
