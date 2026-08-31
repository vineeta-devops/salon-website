import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { salonConfig } from '../data/salonConfig';
import './Testimonials.css';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="testimonial-rating" aria-label={`Rated ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} aria-hidden="true" style={{ opacity: i < rating ? 1 : 0.2 }}>
          ★
        </span>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  if (!salonConfig.testimonials || salonConfig.testimonials.length === 0) return null;

  return (
    <Section id="testimonials" className="testimonials-section">
      <Container>
        <div className="testimonials-header text-center reveal-up">
          <span className="eyebrow">Client Love</span>
          <h2>What Our Guests Say</h2>
          <p>Read about the premium experiences and transformations from our valued clients.<br/><span style={{ fontSize: '0.85em', opacity: 0.7, fontStyle: 'italic' }}>* Sample client feedback for demonstration</span></p>
        </div>

        <div className="testimonials-scroll-container reveal-up delay-100">
          {salonConfig.testimonials.map((testimonial, index) => (
             <article key={testimonial.id || index} className="testimonial-card">
              <StarRating rating={testimonial.rating} />
              <blockquote className="testimonial-review">
                "{testimonial.review}"
              </blockquote>
              <div className="testimonial-author-wrapper">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-service">{testimonial.service}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};
