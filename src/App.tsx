import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { VisualCleaningSection } from './components/VisualCleaningSection';
import { ServicesSection } from './components/ServicesSection';
import { HomeBusinessService } from './components/HomeBusinessService';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { ExcellenceSection } from './components/ExcellenceSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { AboutUs } from './components/AboutUs';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* 1. Cabeçalho fixo com logo, links de navegação e botão de orçamento */}
      <Header />

      <main>
        {/* 2. Banner Principal - Hero (Mobile com CTA na primeira dobra + Desktop azul estilizado) */}
        <Hero />

        {/* 3. Seção de Números & Credibilidade (4 indicadores em fundo azul suave) */}
        <TrustBar />

        {/* 4. Seção Visual de Limpeza (Comparação visual sofá metade sujo e metade limpo) */}
        <VisualCleaningSection />

        {/* 5. Serviços em Cards de Fotos com selo de gota d'água */}
        <ServicesSection />

        {/* 6. Atendimento Domiciliar e Empresarial (Foto curva à esquerda, texto à direita) */}
        <HomeBusinessService />

        {/* 7. Como Funciona (Fundo azul royal com cards 01, 02, 03) */}
        <HowItWorks />

        {/* 8. Benefícios (Grade 2x3 com ícones limpos e botão de orçamento) */}
        <Benefits />

        {/* 9. Avaliações do Google (3 cards com borda fina azul, sem link externo) */}
        <GoogleReviewsSection />

        {/* 10. Excelência em Cada Detalhe (3 bullets com ícones + 3 fotos de processo) */}
        <ExcellenceSection />

        {/* 11. Garantia de Qualidade (Selo central com compromisso de satisfação e retoque em 7 dias) */}
        <GuaranteeSection />

        {/* 12. Sobre a HigienizaLar (Foto institucional à esquerda, história e base em Jardim Camburi à direita) */}
        <AboutUs />

        {/* 13. Banner Final de CTA (Card largo azul com botão de orçamento) */}
        <FinalCTA />

        {/* 14. Perguntas Frequentes (Layout 2 colunas com acordeão acessível) */}
        <FAQ />
      </main>

      {/* 15. Rodapé institucional */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
