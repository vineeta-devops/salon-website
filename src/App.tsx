import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Offers } from './components/Offers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { AppointmentForm } from './components/AppointmentForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { salonConfig } from './data/salonConfig';
import './index.css';

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const theme = salonConfig.theme;
    
    if (theme) {
      root.style.setProperty('--color-primary', theme.primary);
      root.style.setProperty('--color-primary-dark', theme.primaryDark);
      root.style.setProperty('--color-secondary', theme.secondary);
      root.style.setProperty('--color-background', theme.background);
      root.style.setProperty('--color-surface', theme.surface);
      root.style.setProperty('--color-text', theme.text);
      root.style.setProperty('--color-muted', theme.mutedText);
      root.style.setProperty('--color-dark', theme.dark);
      root.style.setProperty('--color-border', theme.border);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Offers />
        <WhyChooseUs />
        <Gallery />
        <About />
        <Testimonials />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;
