import { Container } from './ui/Container';
import { salonConfig } from '../data/salonConfig';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-layout">
          <div className="footer-brand">
            <h3>{salonConfig.salonName}</h3>
            <p>{salonConfig.tagline}</p>
            <div className="footer-social">
              <a 
                href={salonConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Follow us on Instagram"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={1.5}></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={1.5}></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Navigation</h4>
            <nav className="footer-links" aria-label="Footer Navigation">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#offers" className="footer-link">Offers</a>
              <a href="#gallery" className="footer-link">Gallery</a>
              <a href="#testimonials" className="footer-link">Testimonials</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#appointment" className="footer-link">Book Appointment</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact-item">
              <span aria-hidden="true">📍</span>
              <address style={{ fontStyle: 'normal' }}>
                {salonConfig.address}<br />
                {salonConfig.city}
              </address>
            </div>
            <div className="footer-contact-item">
              <span aria-hidden="true">📞</span>
              <a href={`tel:${salonConfig.phoneNumber.replace(/[^0-9+]/g, '')}`} className="footer-link" style={{ margin: 0 }}>
                {salonConfig.phoneNumber}
              </a>
            </div>
            <div className="footer-contact-item">
              <span aria-hidden="true">💬</span>
              <span>{salonConfig.whatsappNumber}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {salonConfig.salonName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
