import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import DairySection from "@/components/sections/DairySection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <DairySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
