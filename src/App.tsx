import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { CleaningHighlight } from './components/CleaningHighlight';
import { WaterproofingHighlight } from './components/WaterproofingHighlight';
import { CombinedOffer } from './components/CombinedOffer';
import { BeforeAfter } from './components/BeforeAfter';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { AuthoritySection } from './components/AuthoritySection';
import { ServiceArea } from './components/ServiceArea';
import { SocialProof } from './components/SocialProof';
import { InstagramSection } from './components/InstagramSection';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. Header with brand logo, nav links and CTA */}
      <Header />

      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* 2. Hero - Primeira Dobra */}
        <Hero />

        {/* 3. O Problema */}
        <ProblemSection />

        {/* 5. Serviços Principais e Secundários */}
        <ServicesSection />

        {/* 6. Destaque: Higienização de Estofados */}
        <CleaningHighlight />

        {/* 7. Destaque: Impermeabilização de Estofados */}
        <WaterproofingHighlight />

        {/* 8. Oferta Combinada: Limpe. Renove. Proteja */}
        <CombinedOffer />

        {/* 9. Antes e Depois (Comparação Estática) */}
        <BeforeAfter />

        {/* 10. Como Funciona (3 Passos) */}
        <HowItWorks />

        {/* 11. Benefícios (Por que escolher a Higieniza Lar?) */}
        <Benefits />

        {/* 12. Autoridade (Cuidado profissional para o seu lar) */}
        <AuthoritySection />

        {/* 13. Área de Atendimento (Grande Vitória - ES) */}
        <ServiceArea />

        {/* 14. Prova Social e Avaliações */}
        <SocialProof />

        {/* 15. Acompanhe a Higieniza Lar no Instagram */}
        <InstagramSection />

        {/* 16. FAQ (Perguntas Frequentes) */}
        <FAQ />

        {/* 17. Formulário de Orçamento / Geração de WhatsApp */}
        <QuoteForm />

        {/* 18. CTA Final */}
        <FinalCTA />
      </main>

      {/* 19. Rodapé Oficial */}
      <Footer />

      {/* 20. Botão Flutuante de WhatsApp (No mobile: apenas ícone circular verde) */}
      <FloatingWhatsApp />
    </div>
  );
}
