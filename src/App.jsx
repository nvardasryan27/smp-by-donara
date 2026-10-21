import { LanguageProvider } from "./context/LanguageContext";

import ScrollProgress from "./components/ScrollProgress";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIsSMP from "./components/WhatIsSMP";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Process from "./components/Process";
import Aftercare from "./components/Aftercare";
import WhyDonara from "./components/WhyDonara";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <ScrollProgress />
        <Navbar />

        <main className="main">
          <Hero />
          <About />
          <WhatIsSMP />
          <Services />
          <BeforeAfter />
          <Process />
          <WhyDonara />
          <Aftercare />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
