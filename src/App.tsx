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
import './index.css';

function App() {
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
