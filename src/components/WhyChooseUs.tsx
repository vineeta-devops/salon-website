import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WhatsAppButton } from './ui/WhatsAppButton';
import './WhyChooseUs.css';

const features = [
  {
    title: "Experienced Professionals",
    description: "Skilled professionals focused on delivering polished results.",
    icon: (
      <svg className="wcu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Premium Products",
    description: "Professional-quality products selected for beauty and hair care.",
    icon: (
      <svg className="wcu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Hygienic Environment",
    description: "A clean, comfortable and welcoming salon environment.",
    icon: (
      <svg className="wcu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Personalized Service",
    description: "Services and recommendations tailored to individual needs.",
    icon: (
      <svg className="wcu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Professional Consultation",
    description: "Understand your treatment options before booking.",
    icon: (
      <svg className="wcu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Customer Satisfaction",
    description: "A customer-first approach focused on comfort and quality.",
    icon: (
      <svg className="wcu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
      </svg>
    )
  }
];

export const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className="why-choose-us-section" bgColor="main">
      <Container>
        <div className="wcu-layout">
          <div className="wcu-content reveal-up">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="wcu-title">Beauty Care With a Personal Touch</h2>
            <p className="wcu-description">
              Experience the difference with our dedicated team of beauty professionals. We prioritize your comfort, style, and satisfaction above everything else.
            </p>
            <div className="wcu-cta" style={{ marginTop: '2rem' }}>
              <WhatsAppButton type="more_info" variant="secondary" className="btn-lg">
                Talk to Us on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
          
          <div className="wcu-grid">
            {features.map((feature, index) => (
              <article key={index} className={`wcu-feature reveal-up delay-${(index % 3 + 1) * 100}`}>
                {feature.icon}
                <h3 className="wcu-feature-title">{feature.title}</h3>
                <p className="wcu-feature-desc">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
