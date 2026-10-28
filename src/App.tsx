import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* 1. Header (Logo e Menu preservados intactos) */}
      <Header />

      <main>
        {/* 2. Hero (Título, subtítulo, slider interativo antes/depois, Google 5★, Sofá limpo em até 2h, CTA verde único) */}
        <Hero />

        {/* 3. Avaliações reais do Google (Prints anexados imediatamente abaixo da Hero) */}
        <GoogleReviewsSection />

        {/* 4. Faixa de Confiança (3 colunas: Google 5★, Anvisa, 2h) */}
        <TrustBar />

        {/* 5. Serviços (2 cards grandes + 3 cards menores com fotos reais e botões verdes) */}
        <ServicesSection />

        {/* 6. Como Funciona (3 passos claros + CTA verde) */}
        <HowItWorks />

        {/* 7. Por que escolher a HigienizaLar (5 diferenciais em cards escuros + cidades atendidas) */}
        <WhyChooseUs />

        {/* 8. FAQ (6 dúvidas frequentes em acordeão acessível + CTA verde) */}
        <FAQ />

        {/* 9. CTA Final (Fundo escuro degradê, telefone e WhatsApp) */}
        <FinalCTA />
      </main>

      {/* 10. Rodapé (Logo original, links âncora, Instagram, telefone e copyright) */}
      <Footer />

      {/* Botão Flutuante do WhatsApp (Aparece após 400px e esconde sobre CTAs verdes) */}
      <FloatingWhatsApp />
    </div>
  );
}
