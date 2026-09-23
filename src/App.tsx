import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { SolutionModal } from './components/SolutionModal';
import { PrefabShowcase } from './components/PrefabShowcase';
import { Applications } from './components/Applications';
import { WhyRavgroup } from './components/WhyRavgroup';
import { Process } from './components/Process';
import { ProjectGallery } from './components/ProjectGallery';
import { ProductCategories } from './components/ProductCategories';
import { CTA } from './components/CTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';
import { SolutionItem } from './data/companyData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState('');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const handleOpenQuote = (subject: string = '') => {
    setQuoteSubject(subject);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectSolution = (solution: SolutionItem) => {
    setSelectedSolution(solution);
  };

  const handleCloseSolution = () => {
    setSelectedSolution(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#171717] font-sans antialiased flex flex-col selection:bg-[#EB3B2C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote('General Project Consultation')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote('Hero - Prefab & Material Quote')} />

        {/* Minimal Trust Strip */}
        <TrustStrip />

        {/* About RAVGROUP */}
        <About onOpenQuote={() => handleOpenQuote('About Section - Company Consultation')} />

        {/* Solutions Grid */}
        <Solutions
          onSelectSolution={handleSelectSolution}
          onOpenQuote={(sub) => handleOpenQuote(sub || 'Solutions Division')}
        />

        {/* Featured Prefab & Wooden Resorts Showcase */}
        <PrefabShowcase onOpenQuote={(sub) => handleOpenQuote(sub || 'Prefab Showcase')} />

        {/* Built For Every Kind of Project - Applications */}
        <Applications onOpenQuote={(sub) => handleOpenQuote(sub || 'Applications')} />

        {/* Why RAVGROUP Dark Section */}
        <WhyRavgroup onOpenQuote={() => handleOpenQuote('Why RAVGROUP - Partnership Inquiry')} />

        {/* Project Process - How We Work */}
        <Process onOpenQuote={() => handleOpenQuote('Project Process Step 01')} />

        {/* Projects & Possibilities Gallery */}
        <ProjectGallery onOpenQuote={(sub) => handleOpenQuote(sub || 'Project Showcase Reference')} />

        {/* Product Category Navigation Section */}
        <ProductCategories onOpenQuote={(sub) => handleOpenQuote(sub || 'Product Category Cut-Sheet')} />

        {/* High Conversion Lead Generation CTA */}
        <CTA onOpenQuote={() => handleOpenQuote('Lead Generation Banner')} />

        {/* Contact & Enquiry Form */}
        <ContactForm initialSubject={quoteSubject} />
      </main>

      {/* Dark Footer */}
      <Footer onOpenQuote={(sub) => handleOpenQuote(sub || 'Footer Inquiry')} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Interactive Solution Detail Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={handleCloseSolution}
        onOpenQuote={handleOpenQuote}
      />

      {/* Project Quote Inquiry Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        defaultSubject={quoteSubject}
      />
    </div>
  );
}
