import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { salonConfig } from '../data/salonConfig';
import './Offers.css';

export const Offers = () => {
  if (!salonConfig.offers || salonConfig.offers.length === 0) return null;

  return (
    <Section id="offers" className="offers-section" bgColor="accent">
      <Container>
        <div className="offers-header text-center reveal-up">
          <span className="eyebrow">Special Offers</span>
          <h2>Beautiful Moments, Better Value</h2>
          <p>
            Explore our carefully curated packages designed to give you the premium salon experience with exceptional value. Enquire directly on WhatsApp.
          </p>
        </div>

        <div className="offers-grid">
          {salonConfig.offers.map((offer, index) => (
            <article key={offer.id || index} className="offer-card reveal-up delay-200">
              {offer.image && (
                <div className="offer-image-wrapper">
                  <img src={offer.image} alt={offer.title} className="offer-image" loading="lazy" />
                  {offer.badge && <span className="offer-badge">{offer.badge}</span>}
                </div>
              )}
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                
                <div className="offer-pricing">
                  <span className="offer-price">{offer.price}</span>
                  {offer.originalPrice && (
                    <span className="offer-original-price">{offer.originalPrice}</span>
                  )}
                </div>
                
                {offer.validText && (
                  <p className="offer-validity">{offer.validText}</p>
                )}
                
                <WhatsAppButton 
                  type="offer" 
                  data={{ offerName: offer.title }} 
                  variant="primary" 
                  className="btn-full"
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};
