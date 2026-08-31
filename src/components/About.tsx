import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { salonConfig } from '../data/salonConfig';
import './About.css';

export const About = () => {
  return (
    <Section id="about" className="about-section">
      <Container>
        <div className="about-layout">
          <div className="about-content reveal-up">
            <span className="eyebrow">About {salonConfig.salonName}</span>
            <h2 className="about-title">{salonConfig.aboutTitle}</h2>
            <p className="about-description">{salonConfig.aboutDescription}</p>
            <p className="about-story">{salonConfig.aboutStory}</p>
            
            <div className="about-highlights">
              {(salonConfig.aboutHighlights || []).map((highlight: string, index: number) => (
                <div key={index} className="about-highlight-item">
                  <svg className="about-highlight-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {highlight}
                </div>
              ))}
            </div>
            
            <WhatsAppButton type="about_cta" variant="secondary" className="btn-lg">
              Talk to Us on WhatsApp
            </WhatsAppButton>
          </div>
          
          <div className="about-image-wrapper reveal-up delay-200">
            <img 
              src={salonConfig.aboutImage} 
              alt={`Inside ${salonConfig.salonName}`} 
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
