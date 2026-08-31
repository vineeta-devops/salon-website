import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { Button } from './ui/Button';
import { salonConfig } from '../data/salonConfig';
import './Hero.css';

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section bgColor="main" className="hero">
      <Container>
        <div className="hero-content">
          <div className="hero-text-wrapper reveal-up delay-100">
            <span className="eyebrow">Beauty • Hair • Wellness</span>
            <h1 className="hero-title">
              <span>Your Beauty.</span>
              <span>Your Style.</span>
              <span>Your Moment.</span>
            </h1>
            <p className="hero-description fade-in delay-200">
              {salonConfig.description}
            </p>
            
            <div className="hero-actions fade-in delay-300">
              <WhatsAppButton type="general" variant="primary" className="btn-lg">
                Book an Appointment on WhatsApp
              </WhatsAppButton>
              
              <Button variant="outline" className="btn-lg" onClick={scrollToServices}>
                Explore Our Services
              </Button>
            </div>
          </div>
          
          <div className="hero-image-wrapper fade-in delay-300">
            <img 
              src={salonConfig.heroImage} 
              alt={`${salonConfig.salonName} - Premium salon services`}
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
