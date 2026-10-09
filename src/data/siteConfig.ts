export interface SiteConfig {
  name: string;
  tagline: string;
  motto: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    operatingHours: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
    twitter?: string;
  };
  stats: {
    studentsTrained: string;
    tournamentsParticipated: string;
    medalsWon: string;
    yearsExcellence: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "VELOCITY CHESS ACADEMY",
  tagline: "Discipline today. A brighter tomorrow.",
  motto: "Chess for Stronger Minds and a Brighter India",
  description: "Nurturing confident, creative and strategic thinkers through the power of chess. India's premier youth chess academy.",
  contact: {
    phone: "+91 98765 43210", // Placeholder - to be updated with official academy phone number
    email: "info@velocitychess.com", // Placeholder - to be updated with official academy email
    address: "Velocity Chess Academy Campus, Main Road",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    operatingHours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: 9:00 AM - 1:00 PM"
  },
  social: {
    instagram: "https://instagram.com/velocitychess",
    facebook: "https://facebook.com/velocitychess",
    youtube: "https://youtube.com/c/velocitychess",
    whatsapp: "https://wa.me/919876543210"
  },
  stats: {
    studentsTrained: "500+",
    tournamentsParticipated: "100+",
    medalsWon: "50+",
    yearsExcellence: "10+"
  }
};
