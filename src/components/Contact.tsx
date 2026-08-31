import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { salonConfig } from '../data/salonConfig';
import './Contact.css';

export const Contact = () => {
  return (
    <Section id="contact" className="contact-section">
      <Container>
        <div className="contact-layout">
          <div className="contact-content reveal-up">
            <span className="eyebrow">Visit Us</span>
            <h2 className="contact-title">Let's Create Your Next Look</h2>
            <p className="contact-description">
              Have a question or ready to book? Reach out to our team and we'll be happy to help.
            </p>

            <div className="contact-grid">
              <div className="contact-item">
                <h3 className="contact-item-title">
                  <svg className="contact-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Address
                </h3>
                <address className="contact-item-text">
                  {salonConfig.address}<br />
                  {salonConfig.city}
                </address>
                <a 
                  href={salonConfig.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Get Directions →
                </a>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">
                  <svg className="contact-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Opening Hours
                </h3>
                <div className="contact-item-text">
                  {salonConfig.openingHours.split('|').map((line, i) => (
                    <div key={i} style={{ marginBottom: '0.25rem' }}>{line.trim()}</div>
                  ))}
                </div>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">
                  <svg className="contact-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h3>
                <div className="contact-item-text">
                  <a href={`tel:${salonConfig.phoneNumber.replace(/[^0-9+]/g, '')}`} className="contact-link" style={{ marginTop: 0, fontWeight: 'normal' }}>
                    {salonConfig.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">
                  <svg className="contact-item-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={1.5}></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={1.5}></line>
                  </svg>
                  Social
                </h3>
                <div className="contact-item-text">
                  <a 
                    href={salonConfig.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                    style={{ marginTop: 0 }}
                  >
                    Follow us on Instagram →
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <WhatsAppButton type="contact_cta" variant="primary" className="btn-lg">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="contact-map-placeholder reveal-up delay-200">
            <svg className="contact-map-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h3 className="contact-map-address">{salonConfig.salonName}</h3>
            <p className="contact-description" style={{ marginBottom: '1.5rem', maxWidth: '80%' }}>
              {salonConfig.address}, {salonConfig.city}
            </p>
            <a 
              href={salonConfig.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
