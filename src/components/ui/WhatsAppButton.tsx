import React from 'react';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

interface WhatsAppButtonProps {
  type: 'general' | 'service' | 'appointment' | 'offer' | 'more_info' | 'gallery_cta' | 'about_cta' | 'contact_cta' | 'sticky_cta';
  data?: any;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  type,
  data,
  children,
  variant = 'primary',
  className = ''
}) => {
  const url = generateWhatsAppUrl(type, data);
  
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      {children}
    </a>
  );
};
