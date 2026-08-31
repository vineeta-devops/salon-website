export const salonConfig = {
  salonName: "Velora Beauty Studio",
  tagline: "Elevate Your Natural Beauty",
  description: "Experience premium beauty services in an elegant and relaxing environment. Our expert stylists are dedicated to bringing out your best.",
  whatsappNumber: "1234567890", // Add country code without '+', e.g. 1234567890
  phoneNumber: "+1 234 567 890",
  address: "123 Luxury Avenue, Suite 100",
  city: "Beverly Hills, CA 90210",
  openingHours: "Mon-Sat: 9am - 7pm | Sun: Closed",
  googleMapsUrl: "https://maps.google.com/?q=Beverly+Hills",
  instagramUrl: "https://instagram.com/velorabeauty",
  logo: "/logo.svg", // Placeholder for actual logo
  heroImage: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", // Remote premium beauty image for development

  theme: {
    primary: "#B76E79",
    primaryDark: "#8E3A4A",
    secondary: "#F5E6E8",
    background: "#FFF9FA",
    surface: "#FFFFFF",
    text: "#262020",
    mutedText: "#6F6264",
    dark: "#24191B",
    border: "#EADBDD"
  },

  aboutTitle: "Beauty Is Personal.",
  aboutDescription: "Welcome to Velora Beauty Studio, where your personal style and beauty take center stage.",
  aboutStory: "Founded with a passion for excellence, our studio is dedicated to providing a luxurious, relaxing, and personalized experience. Our team of expert stylists and beauty professionals are here to understand your unique needs and deliver results that speak for themselves. We believe that true beauty comes from confidence, and our goal is to make every client feel their absolute best.",
  aboutImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200", // A premium salon space
  aboutHighlights: [
    "Professional Team",
    "Premium Products",
    "Personalized Care"
  ],

  services: [
    { id: 1, category: "Hair", name: "Haircut & Styling", description: "Expert cuts and styling tailored to your face shape and lifestyle.", price: "Starting from ₹599", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" },
    { id: 2, category: "Hair", name: "Hair Spa", description: "Deep nourishment and relaxation treatment for healthier, smoother hair.", price: "Starting from ₹999", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
    { id: 3, category: "Hair", name: "Hair Colouring", description: "Premium root touch-ups, highlights, and global coloring.", price: "Starting from ₹1,499", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800" },
    { id: 4, category: "Skin", name: "Classic Cleanup", description: "Essential cleansing, exfoliation, and hydration for glowing skin.", price: "Starting from ₹699", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800" },
    { id: 5, category: "Skin", name: "Signature Glow Facial", description: "Rejuvenating luxury facial targeting dullness and uneven texture.", price: "Starting from ₹1,299", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" },
    { id: 6, category: "Skin", name: "Anti-Aging Treatment", description: "Advanced care to reduce fine lines and boost collagen.", price: "Starting from ₹2,499", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" },
    { id: 7, category: "Makeup", name: "Party Makeup", description: "Flawless makeup application for evening events and parties.", price: "Starting from ₹2,499", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800" },
    { id: 8, category: "Makeup", name: "HD Engagement Makeup", description: "Long-lasting, photogenic makeup for your special moments.", price: "Starting from ₹4,499", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" },
    { id: 9, category: "Bridal", name: "Bridal Makeup", description: "Comprehensive bridal beauty package for your perfect day.", price: "Starting from ₹7,999", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800" },
    { id: 10, category: "Bridal", name: "Pre-Bridal Package", description: "Complete head-to-toe grooming sessions leading up to the wedding.", price: "Starting from ₹14,999", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" },
    { id: 11, category: "Nails", name: "Classic Manicure", description: "Nail shaping, cuticle care, and perfect polish application.", price: "Starting from ₹499", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" },
    { id: 12, category: "Nails", name: "Gel Extensions", description: "Durable and elegant gel nail extensions with custom art.", price: "Starting from ₹1,499", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800" },
    { id: 13, category: "Spa", name: "Relaxation Spa", description: "Full body relaxation massage to relieve tension and stress.", price: "Starting from ₹1,499", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" },
    { id: 14, category: "Spa", name: "Aromatherapy Massage", description: "Soothing massage using premium essential oils.", price: "Starting from ₹1,999", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800" },
    { id: 15, category: "Beauty Treatments", name: "Eyebrow Threading", description: "Precise shaping and grooming for perfect brows.", price: "Starting from ₹99", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" },
    { id: 16, category: "Beauty Treatments", name: "Full Body Waxing", description: "Smooth and gentle hair removal with premium wax.", price: "Starting from ₹1,299", image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800" }
  ],
  offers: [
    { id: 1, title: "Signature Hair Care", description: "Haircut + Hair Spa", price: "Starting from ₹1,499", originalPrice: "₹1,999", badge: "Limited Time", validText: "Valid till end of month", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800" },
    { id: 2, title: "Glow & Relax", description: "Cleanup + Glow Facial", price: "Starting from ₹1,799", originalPrice: "₹2,499", badge: "Popular", validText: "Valid on weekdays", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800" },
    { id: 3, title: "Bridal Beauty Package", description: "Bridal Makeup + Hair Styling", price: "Starting from ₹8,999", originalPrice: "₹12,000", badge: "Premium", validText: "Booking required 1 week prior", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800" },
    { id: 4, title: "Weekend Self-Care", description: "Manicure + Spa Treatment", price: "Starting from ₹2,199", originalPrice: "₹3,000", badge: "Weekend Special", validText: "Valid Saturday-Sunday", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800" }
  ],
  gallery: [
    { id: 1, category: "Salon Interior", title: "Premium Salon Atmosphere", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", alt: "Modern and elegant beauty salon interior with premium stations" },
    { id: 2, category: "Hair", title: "Precision Hair Styling", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", alt: "Professional hairstylist cutting and styling client's hair" },
    { id: 3, category: "Skin", title: "Rejuvenating Facial", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800", alt: "Client receiving a relaxing and rejuvenating facial treatment" },
    { id: 4, category: "Makeup", title: "Flawless Event Makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800", alt: "Beautiful makeup application highlighting facial features" },
    { id: 5, category: "Bridal", title: "Bridal Perfection", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800", alt: "Stunning bride with elegant makeup and traditional attire" },
    { id: 6, category: "Nails", title: "Elegant Gel Extensions", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", alt: "Close up of beautifully manicured hands with soft pink nail polish" },
    { id: 7, category: "Spa", title: "Relaxing Spa Treatment", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800", alt: "Hot stones used during a deep relaxation spa massage" },
    { id: 8, category: "Hair", title: "Vibrant Hair Colour", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800", alt: "Beautifully colored and textured healthy hair" },
    { id: 9, category: "Salon Interior", title: "Comfortable Waiting Area", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800", alt: "Luxury seating area for salon clients to relax before appointments" },
    { id: 10, category: "Makeup", title: "Subtle Glamour", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800", alt: "Model with perfectly blended subtle glamorous makeup" },
    { id: 11, category: "Skin", title: "Glow & Hydration", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", alt: "Healthy glowing skin after a luxury hydration treatment" },
    { id: 12, category: "Bridal", title: "Pre-Bridal Preparation", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800", alt: "Bride getting ready with delicate makeup adjustments" },
    { id: 13, category: "Nails", title: "Classic Red Polish", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800", alt: "Professional application of vibrant red nail polish" },
    { id: 14, category: "Spa", title: "Aromatherapy Session", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800", alt: "Essential oils and flowers used for a calm aromatherapy session" }
  ],
  testimonials: [
    { id: 1, name: "Priya S.", review: "Absolutely loved my hair transformation. The team understood exactly what I wanted and made the whole experience comfortable.", rating: 5, service: "Hair Styling" },
    { id: 2, name: "Ananya M.", review: "The glow facial was incredible! My skin has never felt so hydrated and fresh. Highly recommend their skincare experts.", rating: 5, service: "Signature Glow Facial" },
    { id: 3, name: "Sneha K.", review: "I booked them for my engagement makeup, and they did a phenomenal job. The makeup stayed flawless all evening.", rating: 5, service: "HD Engagement Makeup" },
    { id: 4, name: "Riya T.", review: "Very professional and hygienic environment. The gel extensions are beautiful and exactly the shape I asked for.", rating: 4, service: "Gel Extensions" },
    { id: 5, name: "Meera D.", review: "The relaxation spa is a must-try. Such a calming atmosphere and excellent service. I left feeling completely rejuvenated.", rating: 5, service: "Relaxation Spa" }
  ]
};
