import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { salonConfig } from '../data/salonConfig';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import type { AppointmentData } from '../utils/whatsapp';
import './AppointmentForm.css';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<AppointmentData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Min date is today
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name as keyof AppointmentData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    setSuccessMessage('');
  };

  const validate = () => {
    const newErrors: Partial<AppointmentData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    
    // Basic phone validation for Indian 10 digits or +91 format
    const phoneRegex = /^(\+91[\-\s]?)?[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your WhatsApp/phone number.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid WhatsApp/phone number.';
    }
    
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.date) newErrors.date = 'Please select a preferred date.';
    else if (formData.date < today) newErrors.date = 'Date cannot be in the past.';
    
    if (!formData.time) newErrors.time = 'Please select a preferred time.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format date for display: e.g., "15 September 2026"
    const dateObj = new Date(formData.date);
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const dataToSubmit = {
      ...formData,
      date: formattedDate
    };

    const whatsappUrl = generateWhatsAppUrl('appointment', dataToSubmit);
    
    // Simulate slight delay to feel like processing, then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSuccessMessage('Your enquiry is ready in WhatsApp. Please send the message to complete your request.');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Section id="appointment" className="appointment-section">
      <Container>
        <div className="appointment-layout">
          <div className="appointment-content reveal-up">
            <span className="eyebrow">Book Your Visit</span>
            <h2 className="appointment-title">Ready for Your Next Look?</h2>
            <p className="appointment-description">
              Tell us what you're looking for and we'll help you find the right service and appointment time.
            </p>

            <div className="appointment-trust-features">
              <div className="trust-feature">
                <svg className="trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <div className="trust-text">
                  <h4>Prefer to ask a question first?</h4>
                  <p>Chat with us on WhatsApp anytime.</p>
                </div>
              </div>
              <div className="trust-feature">
                <svg className="trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="trust-text">
                  <h4>Direct Confirmation</h4>
                  <p>Appointments are confirmed directly by our salon team.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-form-wrapper reveal-up delay-100">
            <form className="appointment-form" onSubmit={handleSubmit} noValidate>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name<span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  WhatsApp / Phone Number<span className="form-required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your WhatsApp number"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Select a Service<span className="form-required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="" disabled>Select a service...</option>
                  {salonConfig.services.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {errors.service && <span id="service-error" className="form-error">{errors.service}</span>}
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    Preferred Date<span className="form-required">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                  />
                  {errors.date && <span id="date-error" className="form-error">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    Preferred Time<span className="form-required">*</span>
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                    aria-invalid={!!errors.time}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                  />
                  {errors.time && <span id="time-error" className="form-error">{errors.time}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Anything else you'd like us to know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Tell us about your preferred look, treatment or any questions..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-submit-wrapper">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-full btn-lg" 
                  disabled={isSubmitting}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  {isSubmitting ? 'Preparing Enquiry...' : 'Send Enquiry on WhatsApp'}
                </button>
                <p className="form-submit-note">
                  No payment required. We'll confirm your appointment details on WhatsApp.
                </p>
                {successMessage && (
                  <div className="form-success" role="alert">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {successMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};
