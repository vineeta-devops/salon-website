import { WhatsAppButton } from './ui/WhatsAppButton';
import './StickyWhatsApp.css';

export const StickyWhatsApp = () => {
  return (
    <div className="sticky-whatsapp-container" aria-label="Quick contact">
      <div className="sticky-whatsapp-btn">
        <WhatsAppButton 
          type="sticky_cta" 
          variant="primary" 
          className="btn-full"
        >
          Chat on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
};
