import { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { salonConfig } from '../data/salonConfig';
import './Gallery.css';

const CATEGORIES = [
  'All',
  'Salon Interior',
  'Hair',
  'Makeup',
  'Bridal',
  'Nails',
  'Skin',
  'Spa'
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const filteredGallery = salonConfig.gallery.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  if (!salonConfig.gallery || salonConfig.gallery.length === 0) return null;

  return (
    <Section id="gallery" className="gallery-section">
      <Container>
        <div className="gallery-header text-center reveal-up">
          <span className="eyebrow">Our Work</span>
          <h2>Looks That Speak for Themselves</h2>
          <p>
            Explore our salon atmosphere and beautiful transformations. A glimpse into the premium care waiting for you.
          </p>
        </div>

        <div className="gallery-filter-wrapper reveal-up delay-100">
          <div className="gallery-filter" role="tablist" aria-label="Gallery Categories">
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

        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item reveal-up"
              style={{ animationDelay: `${(index % 5) * 100}ms` }}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="gallery-image"
                loading="lazy" 
              />
              <div className="gallery-overlay" aria-hidden="true">
                <svg className="gallery-overlay-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta-wrapper text-center reveal-up delay-200">
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>Love What You See? Talk to Us</p>
          <WhatsAppButton type="gallery_cta" variant="primary" className="btn-lg">
            Enquire on WhatsApp
          </WhatsAppButton>
        </div>
      </Container>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Viewer"
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="lightbox-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
              autoFocus
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.alt} 
              className="lightbox-image" 
            />
            <div className="lightbox-caption">
              <div className="lightbox-category">{selectedImage.category}</div>
              <h3 className="lightbox-title">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
