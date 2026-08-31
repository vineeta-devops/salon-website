import { useState } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { salonConfig } from '../data/salonConfig';
import './Services.css';

const CATEGORIES = [
  'All',
  'Hair',
  'Skin',
  'Makeup',
  'Bridal',
  'Nails',
  'Spa',
  'Beauty Treatments'
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = salonConfig.services.filter(service => 
    activeCategory === 'All' ? true : service.category === activeCategory
  );

  return (
    <Section id="services" className="services-section">
      <Container>
        <div className="services-header text-center reveal-up">
          <span className="eyebrow">Our Services</span>
          <h2 className="services-title">Beauty, Hair & Wellness — Tailored to You</h2>
          <p className="services-description">
            Explore our professional salon services and enquire directly through WhatsApp to book your next session.
          </p>
        </div>

        <div className="category-filter-wrapper reveal-up delay-100">
          <div className="category-filter" role="tablist" aria-label="Service Categories">
            {CATEGORIES.map(category => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <article 
              key={service.id || index} 
              className="service-card reveal-up delay-200"
            >
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="service-image"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <span className="service-category">{service.category}</span>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">{service.price}</div>
                <WhatsAppButton 
                  type="service" 
                  data={{ serviceName: service.name }}
                  variant="outline" 
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
