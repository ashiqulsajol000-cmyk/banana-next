import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageUpButton from "../../components/PageUpButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "BANANA A TO Z | SOMPRITY A2Z — Global Sustainable Bio-Industry",
  description: "Official website of Banana A to Z by SOMPRITY A2Z. International B2B exporter of banana fiber, premium bark sheets, organic handicrafts, and healthy agro-nutrition from Bandarban, Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preload" as="image" href="/frames/frame-001.webp" type="image/webp" fetchPriority="high" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="bg-[#FBFBF8] text-gray-900 antialiased font-sans selection:bg-emerald-500 selection:text-white min-h-full flex flex-col relative">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <PageUpButton />
        {/* Floating WhatsApp Quick Button */}
        <a href="https://wa.me/8801861073333" target="_blank" rel="noopener noreferrer" className="fixed right-5 sm:right-6 bottom-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center text-3xl hover:bg-[#1EBE5D] hover:-translate-y-1 hover:shadow-[#25D366]/60 transition-all duration-300 group" aria-label="Chat on WhatsApp">
          <i className="fa-brands fa-whatsapp group-hover:scale-110 transition-transform"></i>
        </a>
      </body>
    </html>
  );
}
