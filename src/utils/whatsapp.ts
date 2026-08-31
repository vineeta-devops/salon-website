import { salonConfig } from '../data/salonConfig';

type WhatsappMessageType = 'general' | 'service' | 'appointment' | 'offer' | 'more_info' | 'gallery_cta' | 'about_cta' | 'contact_cta' | 'sticky_cta';

export interface AppointmentData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export const generateWhatsAppUrl = (
  type: WhatsappMessageType, 
  data?: any
): string => {
  let message = '';
  const { salonName, whatsappNumber } = salonConfig;

  switch (type) {
    case 'general':
      message = `Hi, I would like to enquire about booking an appointment at ${salonName}. Please share the available slots.`;
      break;
    case 'service':
      const serviceName = data?.serviceName || 'a service';
      message = `Hi, I am interested in the ${serviceName} service at ${salonName}. Please share the details, price and available appointment slots.`;
      break;
    case 'appointment':
      const apt = data as AppointmentData;
      const msgLine = apt?.message ? `\nMessage: ${apt.message}` : '';
      message = `Hi, I would like to book an appointment at ${salonName}.\n\nName: ${apt?.name || ''}\nWhatsApp/Phone: ${apt?.phone || ''}\nService: ${apt?.service || ''}\nPreferred Date: ${apt?.date || ''}\nPreferred Time: ${apt?.time || ''}${msgLine}`;
      break;
    case 'offer':
      const offerName = data?.offerName || 'an offer';
      message = `Hi, I am interested in the ${offerName} offer at ${salonName}. Please share the package details, price and available appointment slots.`;
      break;
    case 'more_info':
      message = `Hi, I would like to know more about the services at ${salonName}. Please share the details and available appointments.`;
      break;
    case 'gallery_cta':
      message = `Hi, I would like to know more about the salon services and available appointments at ${salonName}.`;
      break;
    case 'about_cta':
      message = `Hi, I would like to know more about ${salonName} and your salon services.`;
      break;
    case 'contact_cta':
      message = `Hi, I would like to know more about the services and availability at ${salonName}.`;
      break;
    case 'sticky_cta':
      message = `Hi, I would like to know more about the services at ${salonName}.`;
      break;
    default:
      message = `Hi, I have a question about ${salonName}.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};
