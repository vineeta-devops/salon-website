# Salon Website — Client Customization Guide

This project is a reusable, premium salon website template. The website's structure, layout, responsive design, and core functionality (like the WhatsApp lead generation system) are already built and fully functional.

When setting up this website for a new salon client, **you generally do not need to rebuild the website or modify React components**. Instead, you will simply edit the main configuration file and replace the demo images.

---

## 1. Before Starting

When onboarding a new client, follow these initial steps:
1. Make a fresh copy/duplicate of the project folder for the new client.
2. Open the project folder in VS Code (or your preferred editor).
3. **Do NOT immediately edit component files or CSS.**
4. First, open the master configuration file:
   `src/data/salonConfig.ts`

This single file acts as the brain of the website and contains almost all client-specific data.

---

## 2. Salon Information

The business details are located at the top of `salonConfig.ts`. Here you will change the core information like the salon name, tagline, description, and contact info.

**Example:**
```typescript
const salonConfig = {
  salonName: "New Client Salon",
  tagline: "Luxury Beauty. Your Way.",
  description: "Experience premium beauty services in an elegant environment.",
  whatsappNumber: "919876543210",
  phoneNumber: "+91 98765 43210",
  address: "Main Road, Dhanbad, Jharkhand",
  city: "Dhanbad, JH 826001",
  openingHours: "Mon-Sun: 10am - 8pm",
  googleMapsUrl: "https://maps.google.com/?q=Dhanbad",
  instagramUrl: "https://instagram.com/newclientsalon",
  ...
}
```

> **IMPORTANT:** The `whatsappNumber` must be entered in the international format **without** spaces, brackets, dashes, or the `+` symbol. 
> Example: `919876543210`

---

## 3. How to Change the Theme Colors

The website uses a centralized theme object inside `salonConfig.ts`. The React application automatically reads this object and updates the CSS variables across the entire site.

**Current Structure:**
```typescript
theme: {
  primary: "#B76E79",      // Primary CTAs, active states, highlights
  primaryDark: "#8E3A4A",  // Hover states for primary buttons
  secondary: "#F5E6E8",    // Accent backgrounds, soft highlights
  background: "#FFF9FA",   // Main page background
  surface: "#FFFFFF",      // Card backgrounds, alternating sections
  text: "#262020",         // Main body text
  mutedText: "#6F6264",    // Secondary text, subtitles
  dark: "#24191B",         // Deep contrasts, dark buttons
  border: "#EADBDD"        // Dividers, card borders
}
```

To create a new client's theme, simply change these values in `salonConfig.ts`. **Do NOT edit every CSS file individually.**

### Sample Themes

**1. Luxury Rose (Current)**
```typescript
theme: {
  primary: "#B76E79", primaryDark: "#8E3A4A", secondary: "#F5E6E8",
  background: "#FFF9FA", surface: "#FFFFFF", text: "#262020",
  mutedText: "#6F6264", dark: "#24191B", border: "#EADBDD"
}
```

**2. Champagne Gold**
```typescript
theme: {
  primary: "#D4AF37", primaryDark: "#AA8C2C", secondary: "#FDFBF7",
  background: "#FAFAFA", surface: "#FFFFFF", text: "#333333",
  mutedText: "#777777", dark: "#1A1A1A", border: "#EBEBEB"
}
```

**3. Modern Black & White**
```typescript
theme: {
  primary: "#000000", primaryDark: "#333333", secondary: "#F5F5F5",
  background: "#FFFFFF", surface: "#FAFAFA", text: "#111111",
  mutedText: "#666666", dark: "#000000", border: "#EEEEEE"
}
```

---

## 4. How to Change Services

The `services` array in `salonConfig.ts` populates the Services section and its filtering system.

**Example Service Object:**
```typescript
{ 
  id: 1, 
  category: "Hair", 
  name: "Haircut & Styling", 
  description: "Expert cuts tailored to your lifestyle.", 
  price: "Starting from ₹599", 
  image: "/images/haircut.webp" 
}
```

- **Add a service:** Copy an existing object, paste it into the array, and update the ID and details.
- **Remove a service:** Delete the object from the array.
- **Change details:** Simply edit the `name`, `price`, `description`, or `image` string.

> **IMPORTANT:** To ensure the category filters work correctly, stick to these supported categories: `Hair`, `Skin`, `Makeup`, `Bridal`, `Nails`, `Spa`, `Beauty Treatments`.

---

## 5. How to Change Offers

The `offers` array populates the promotional section.

**Example Offer Object:**
```typescript
{ 
  id: 1, 
  title: "Signature Hair Care", 
  description: "Haircut + Hair Spa", 
  price: "Starting from ₹1,499", 
  originalPrice: "₹1,999", 
  badge: "Limited Time", 
  validText: "Valid till end of month", 
  image: "/images/offer1.webp" 
}
```
You can add, edit, or remove offers by modifying this array. Changing these fields will automatically update the UI cards and the WhatsApp enquiry message that gets generated when a user clicks the offer.

---

## 6. How to Change the Gallery

The `gallery` array controls the portfolio section and its Lightbox features.

**Example Gallery Object:**
```typescript
{ 
  id: 1, 
  category: "Bridal", 
  title: "Bridal Perfection", 
  image: "/images/bridal1.webp", 
  alt: "Stunning bride with elegant makeup" 
}
```
- **category:** Must match one of the supported categories (e.g., `Hair`, `Skin`, `Makeup`, `Bridal`, `Nails`, `Spa`, `Salon Interior`).
- **image:** Use reliable image URLs. Verify that the image loads correctly in your browser.
- **alt:** Always provide descriptive alt text for SEO and accessibility.

---

## 7. How to Replace Images with Client Images

The project currently uses remote Unsplash images for the demo. For a real client, follow this workflow:

1. **Collect** high-quality images from the client.
2. **Resize/Compress** them (e.g., use WebP or optimized JPGs to ensure fast loading times).
3. **Place** them inside the `public/images/` folder in your project.
4. **Update** the image paths in `salonConfig.ts` to point to the local files (e.g., `/images/bridal-makeup.webp`).
5. **Verify** all images load properly in the browser.

**Naming Convention Example:**
Keep filenames lowercase and use hyphens.
```text
public/images/
  salon-interior.webp
  hair-spa.webp
  bridal-makeup.webp
```

---

## 8. How to Change the About Section

Locate the "About" fields in `salonConfig.ts`.

**Example:**
```typescript
aboutTitle: "Beauty Is Personal.",
aboutDescription: "Welcome to Glow Beauty Studio...",
aboutStory: "Founded with a passion for excellence...",
aboutImage: "/images/about-us.webp",
aboutHighlights: [
  "Professional Team",
  "Premium Products",
  "Personalized Care"
],
```
Editing these will instantly update the About section on the website.

---

## 9. How to Change Testimonials

The `testimonials` array populates the customer review slider.

**Example:**
```typescript
{ 
  id: 1,
  name: "Priya S.", 
  review: "Absolutely loved my hair transformation.", 
  rating: 5, 
  service: "Hair Styling" 
}
```
You can add, remove, or edit testimonials here. **Before launching a real client website, replace the demo testimonials with genuine feedback from the client's actual customers.**

---

## 10. How to Change Contact Information

All contact details shown in the footer and contact sections are drawn from `salonConfig.ts`. Update the following fields:
- `address`
- `city`
- `phoneNumber`
- `whatsappNumber`
- `openingHours`
- `googleMapsUrl`
- `instagramUrl`

Do not manually edit `Contact.tsx` or `Footer.tsx` to change this information.

---

## 11. How WhatsApp Lead Generation Works

This website acts as a high-conversion lead generation tool without requiring a backend, database, or payment gateway.

**The Flow:**
1. Visitor clicks a WhatsApp CTA on the website.
2. The website instantly generates a pre-filled, structured message based on what they clicked (e.g., a specific service or offer).
3. The WhatsApp app (or Web) opens.
4. The customer hits "Send".
5. The salon receives the lead directly on their WhatsApp.

The destination number is entirely controlled by `salonConfig.whatsappNumber`.
The website automatically handles different enquiry types (General, Service, Offer, Appointment, Contact, Sticky CTA). **You do NOT need to edit `whatsapp.ts` when creating a new client.**

---

## 12. How to Customize Navbar / Branding

- **Salon Name:** Controlled by `salonConfig.salonName`. It appears as text in the Navbar if no logo is used.
- **Logo:** Replace the `public/logo.svg` file with the client's actual logo. If the client uses a PNG, rename the file in the `public` folder and update the `logo` reference in `salonConfig.ts`.

---

## 13. How to Customize SEO

SEO metadata is located inside the `index.html` file in the root directory.

Open `index.html` and update:
- `<title>`: e.g., `Glow Beauty Studio | Hair, Makeup & Beauty Services in Dhanbad`
- `<meta name="description" ...>`: Update with the client's location and top services.
- Open Graph (`og:title`, `og:description`, `og:image`): Update for social media sharing.
- **Favicon:** Replace `public/favicon.svg` or `favicon.ico` with the client's icon.

Always use the client's actual location keywords in the title and description to improve local search rankings.

---

## 14. Client Customization Checklist

Use this checklist before launching a new client site:

**CLIENT DETAILS**
- [ ] Salon name
- [ ] Tagline
- [ ] Description
- [ ] WhatsApp (No spaces/symbols)
- [ ] Phone
- [ ] Address
- [ ] Opening hours
- [ ] Google Maps URL
- [ ] Instagram URL

**THEME**
- [ ] Primary
- [ ] Primary dark
- [ ] Secondary
- [ ] Background
- [ ] Text
- [ ] Accent/dark
- [ ] Border

**SERVICES & OFFERS**
- [ ] Services updated
- [ ] Prices updated
- [ ] Service images updated
- [ ] Offers updated
- [ ] Offer images updated

**GALLERY & CONTENT**
- [ ] Client images added to `public/images/`
- [ ] Gallery categories checked
- [ ] Alt text updated for SEO
- [ ] About content updated
- [ ] About image updated
- [ ] Real testimonials added

**SEO**
- [ ] Page title (`index.html`)
- [ ] Meta description
- [ ] Favicon replaced
- [ ] Social metadata updated

**TESTING**
- [ ] WhatsApp buttons open correctly
- [ ] Appointment form submits to WhatsApp
- [ ] Phone/Instagram/Maps links work
- [ ] Mobile viewport tested
- [ ] Tablet/Desktop viewports tested
- [ ] No horizontal overflow on mobile
- [ ] No broken images

---

## 15. How to Run the Website Locally

To preview your changes on your own computer:
1. Open your terminal.
2. Navigate to the project folder: `cd path/to/project`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open the `http://localhost:5173` URL shown in the terminal.

---

## 16. How to Build Before Deployment

Before deploying the website, verify that it builds without errors. Run:
```bash
npm run build
```
The build must complete successfully. If it fails, check the terminal for TypeScript or missing file errors.

---

## 17. How to Deploy a New Client

**Recommended Workflow:**
1. Duplicate the template project for the new client.
2. Customize `salonConfig.ts`.
3. Replace images in the `public/` folder.
4. Test locally (`npm run dev`).
5. Verify the build (`npm run build`).
6. Create a new GitHub repository and push the customized project.
7. Import the repository into your hosting provider (e.g., Vercel, Netlify).
8. Deploy the site.
9. Test the live website on a real mobile device.

*(Note: Because this is a frontend-only site, you do not need to configure environment variables or databases on the hosting provider.)*

---

## 18. What I Should NOT Change

Unless you are explicitly adding new features or changing the core layout, **DO NOT modify these files:**
- `src/utils/whatsapp.ts`
- `src/components/ui/WhatsAppButton.tsx`
- Any Component CSS files (e.g., `Navbar.css`, `Hero.css`)
- `src/App.tsx`
- `vite.config.ts` or `tsconfig.json`

Customization should happen almost exclusively inside `src/data/salonConfig.ts`.

---

## 19. Troubleshooting

1. **Image not showing:** Check if the file exists in `public/images/` and ensure the path in `salonConfig.ts` is exactly correct (e.g., `/images/file.webp`).
2. **WhatsApp not opening:** Ensure `whatsappNumber` in `salonConfig.ts` contains only numbers (no spaces, no `+`).
3. **WhatsApp opens but wrong number:** Double-check the `whatsappNumber` field in `salonConfig.ts`.
4. **Service category not appearing:** Ensure the category name in the `services` array perfectly matches one of the supported categories.
5. **Theme color not changing:** Ensure you entered a valid Hex code (e.g., `#FF0000`) in the `theme` object.
6. **Mobile horizontal scrolling:** Avoid adding long unbroken text strings. Ensure all custom images are properly responsive.
7. **Build error:** Run `npm run build` to see the exact error. Usually caused by a missing comma or typo in `salonConfig.ts`.
8. **Instagram link not working:** Verify the `instagramUrl` includes `https://`.
9. **Google Maps link not working:** Verify the `googleMapsUrl` includes `https://`.

---

## 20. Example: Convert this Demo into a New Client

*(Fictional Information used for demonstration)*

**Before (Velora):**
```typescript
const salonConfig = {
  salonName: "Velora Beauty Studio",
  tagline: "Elevate Your Natural Beauty",
  whatsappNumber: "1234567890",
  theme: { primary: "#B76E79", ... }
  // ...
```

**After (Glow Beauty):**
```typescript
const salonConfig = {
  salonName: "Glow Beauty Studio",
  tagline: "Shine From Within",
  whatsappNumber: "919876543210",
  theme: { 
    primary: "#D4AF37", // Switched to Gold theme
    // ...
  }
  // ...
```
Simply modifying these lines transforms the website into a completely new brand.

---

> ## 🌟 IMPORTANT GOLDEN RULE
> **90% of client customization should happen inside `src/data/salonConfig.ts`.**
> This project was explicitly designed to separate data/branding from code. This ensures you can spin up new, bug-free salon websites rapidly without writing a single line of React or CSS.

---

## Quick Client Customization Workflow

1. Copy project
2. Open `salonConfig.ts`
3. Update business information
4. Update theme
5. Update services
6. Update offers
7. Replace images in `public/`
8. Update gallery
9. Update about section
10. Add real testimonials
11. Update SEO in `index.html`
12. Run `npm run dev`
13. Test mobile layout
14. Test WhatsApp functionality
15. Run `npm run build`
16. Push to GitHub
17. Deploy to Vercel
18. Test live website
