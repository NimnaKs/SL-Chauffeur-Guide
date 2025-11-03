export type Language = "en" | "de";

type DestinationRecord = {
  id: string;
  name: string;
  image: string;
  description: Record<Language, string>;
};

type Destination = {
  id: string;
  name: string;
  image: string;
  description: string;
};

type MenuLink = {
  label: string;
  href: string;
};

type FooterLink = MenuLink & {
  external?: boolean;
};

type FooterContent = {
  contactHeading: string;
  addressLines: string[];
  phoneLabel: string;
  phoneNumber: string;
  emailLabel: string;
  emailAddress: string;
  hoursHeading: string;
  weekdayHours: string;
  weekendHours: string;
  exploreHeading: string;
  exploreLinks: MenuLink[];
  infoHeading: string;
  infoLinks: FooterLink[];
  copyright: string;
};

type ContactFormContent = {
  heading: string;
  subheading: string;
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  submitLabel: string;
  successMessage: string;
  infoHeading: string;
  contactDetails: {
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    whatsappLabel: string;
    whatsappValue: string;
    locationLabel: string;
    locationValue: string;
  };
};

type PageContent = {
  heroHeading: string;
  heroSubheading: string;
};

type AboutPageContent = PageContent & {
  highlightTitle: string;
  highlightBody: string;
  bullets: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  stats: { value: string; label: string }[];
};

type GalleryPageContent = PageContent & {
  ctaPrompt: string;
  ctaLabel: string;
};

type HomeContent = {
  about: {
    heading: string;
    subheading: string;
    highlightTitle: string;
    highlightBody: string;
    bullets: string[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    stats: { value: string; label: string }[];
  };
  featuredDestinations: {
    heading: string;
    subheading: string;
    viewAllLabel: string;
  };
  socialGallery: {
    heading: string;
    subheading: string;
    ctaPrompt: string;
    ctaLabel: string;
  };
  testimonials: {
    heading: string;
    subheading: string;
  };
};

type Translation = {
  nav: {
    menu: MenuLink[];
    ctaLabel: string;
  };
  topBar: {
    email: string;
    phone: string;
    location: string;
  };
  hero: {
    heading: string;
    subheading: string;
    ctaLabel: string;
  };
  home: HomeContent;
  contactForm: ContactFormContent;
  pages: {
    about: AboutPageContent;
    destinations: PageContent;
    gallery: GalleryPageContent;
    contact: PageContent;
  };
  footer: FooterContent;
  floatingBadges: {
    tripAdvisor: string;
    whatsapp: string;
  };
  destinations: {
    items: Destination[];
  };
};

const DESTINATION_SOURCE: DestinationRecord[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    image: "/img/sigiriya.png",
    description: {
      en: "Ancient rock fortress with stunning views.",
      de: "Antike Felsenfestung mit atemberaubender Aussicht.",
    },
  },
  {
    id: "ella",
    name: "Ella",
    image: "/img/ella.png",
    description: {
      en: "Tea country hikes and epic viewpoints.",
      de: "Wanderungen im Teeland und spektakuläre Aussichtspunkte.",
    },
  },
  {
    id: "kandy",
    name: "Kandy",
    image: "/img/kandy.png",
    description: {
      en: "Cultural heart and sacred Temple of the Tooth.",
      de: "Kulturelles Zentrum mit dem heiligen Zahntempel.",
    },
  },
  {
    id: "galle",
    name: "Galle",
    image: "/img/galle.png",
    description: {
      en: "Historic fort walls and coastal charm.",
      de: "Historische Festungsmauern und Küstenflair.",
    },
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image: "/img/mirissa.png",
    description: {
      en: "Golden bay and whale-watch mornings.",
      de: "Goldene Bucht und Walbeobachtung am Morgen.",
    },
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: "/img/nuwara-eliya.png",
    description: {
      en: "Cool climate, tea estates, colonial vibe.",
      de: "Kühles Klima, Teeplantagen und koloniales Flair.",
    },
  },
  {
    id: "ambuluwawa",
    name: "Ambuluwawa",
    image: "/img/ambuluwawa.png",
    description: {
      en: "Iconic spiral tower with 360° mountain views.",
      de: "Ikonischer Turm mit 360°-Bergpanorama.",
    },
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    image: "/img/anuradhapura.png",
    description: {
      en: "Sacred city of ancient stupas and ruins.",
      de: "Heilige Stadt mit alten Stupas und Ruinen.",
    },
  },
  {
    id: "arugambay",
    name: "Arugam Bay",
    image: "/img/arugambay.png",
    description: {
      en: "Laid-back surf town on the east coast.",
      de: "Entspannter Surfort an der Ostküste.",
    },
  },
  {
    id: "awissawella",
    name: "Awissawella",
    image: "/img/awissawella.png",
    description: {
      en: "Gateway town to lush waterfalls and hills.",
      de: "Tor zu üppigen Wasserfällen und Hügeln.",
    },
  },
  {
    id: "belihuloya",
    name: "Belihuloya",
    image: "/img/belihuloya.png",
    description: {
      en: "Quiet rivers, trekking, and eco stays.",
      de: "Stille Flüsse, Trekking und Öko-Lodges.",
    },
  },
  {
    id: "colombo",
    name: "Colombo",
    image: "/img/colombo.png",
    description: {
      en: "Cosmopolitan capital with heritage lanes.",
      de: "Kosmopolitische Hauptstadt mit historischen Gassen.",
    },
  },
];

const sharedContact = {
  email: "slchauffeurguide@gmail.com",
  phone: "+94 76 853 9902",
  location: "Kalutara North, Sri Lanka",
};

const en: Translation = {
  nav: {
    menu: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Destinations", href: "/destinations" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact-us" },
    ],
    ctaLabel: "Get in Touch",
  },
  topBar: sharedContact,
  hero: {
    heading: "Plan Your Sri Lanka Holiday",
    subheading: "Choose your destinations and dates — we’ll send a custom quote.",
    ctaLabel: "Get Quote",
  },
  home: {
    about: {
      heading: "About Us",
      subheading:
        "Learn more about who we are, what we do, and our passion for showing you the best of Sri Lanka.",
      highlightTitle: "More Than a Driver — Your Local Host",
      highlightBody:
        "From airport pickups to multi-day tours, we tailor routes to your pace — sharing our favorite backroads, viewpoints, and food stops from Sigiriya to Ella, Kandy to Galle.",
      bullets: [
        "Private, customizable itineraries for couples, families & small groups",
        "Clean, air-conditioned vehicles • Bottled water • Photo stops on request",
        "Honest local tips on timing, tickets, and the best viewpoints",
      ],
      primaryCtaLabel: "Get a Custom Quote",
      secondaryCtaLabel: "Explore Destinations",
      stats: [
        { value: "8+", label: "Years guiding" },
        { value: "50+", label: "Trips completed" },
        { value: "5★", label: "Avg. rating" },
        { value: "100%", label: "Custom routes" },
      ],
    },
    featuredDestinations: {
      heading: "Popular Destinations",
      subheading: "Discover Sri Lanka’s most iconic locations",
      viewAllLabel: "View All Destinations",
    },
    socialGallery: {
      heading: "Follow Our Journey",
      subheading:
        "Latest real moments from @srilankanchauffeurguide — safaris, hill country, and happy guests",
      ctaPrompt: "See more reels, safaris, and guest moments",
      ctaLabel: "Follow on Instagram",
    },
    testimonials: {
      heading: "Client Testimonials",
      subheading:
        "Real experiences from travelers who explored Sri Lanka with Suresh",
    },
  },
  contactForm: {
    heading: "Contact Us",
    subheading: "Plan your Sri Lanka adventure with us. Get in touch today.",
    fields: {
      name: { label: "Your Name", placeholder: "John Doe" },
      email: { label: "Email Address", placeholder: "john@example.com" },
      message: {
        label: "Your Message",
        placeholder: "Tell us about your dream Sri Lankan adventure...",
      },
    },
    submitLabel: "Send Message",
    successMessage: "Message sent successfully! We’ll be in touch soon.",
    infoHeading: "Contact Information",
    contactDetails: {
      phoneLabel: "Phone",
      phoneValue: sharedContact.phone,
      emailLabel: "Email",
      emailValue: sharedContact.email,
      whatsappLabel: "WhatsApp",
      whatsappValue: "Chat with us",
      locationLabel: "Location",
      locationValue:
        "151/2/1, Weniwelkatiyagama, Nagoda, Dodangoda, Kalutara North, Sri Lanka",
    },
  },
  pages: {
    about: {
      heroHeading: "About Us",
      heroSubheading:
        "Discover Sri Lanka with trusted chauffeur guides — scenic, safe, and truly local.",
      highlightTitle: "More Than a Driver — Your Local Host",
      highlightBody:
        "From airport pickups to multi-day tours, we tailor routes to your pace — sharing our favorite backroads, viewpoints, and food stops from Sigiriya to Ella, Kandy to Galle. Expect comfortable AC vehicles, punctual service, and flexible plans.",
      bullets: [
        "Private, customizable itineraries for couples, families & small groups",
        "Clean, air-conditioned vehicles • Bottled water • Photo stops on request",
        "Honest local tips on timing, tickets, and the best viewpoints",
      ],
      primaryCtaLabel: "Get a Custom Quote",
      secondaryCtaLabel: "Explore Destinations",
      stats: [
        { value: "8+", label: "Years guiding" },
        { value: "50+", label: "Trips completed" },
        { value: "5★", label: "Avg. rating" },
        { value: "100%", label: "Custom routes" },
      ],
    },
    destinations: {
      heroHeading: "Destinations",
      heroSubheading:
        "Explore Sri Lanka’s most iconic places with a local chauffeur guide.",
    },
    gallery: {
      heroHeading: "Gallery",
      heroSubheading:
        "Moments from across the island — safaris, hill country, and happy guests.",
      ctaPrompt: "See more reels, safaris, and guest moments",
      ctaLabel: "Follow on Instagram",
    },
    contact: {
      heroHeading: "Contact Us",
      heroSubheading:
        "Plan your Sri Lanka adventure with a licensed chauffeur guide.",
    },
  },
  footer: {
    contactHeading: "Contact",
    addressLines: [sharedContact.location],
    phoneLabel: "Phone",
    phoneNumber: sharedContact.phone,
    emailLabel: "Email",
    emailAddress: sharedContact.email,
    hoursHeading: "Hours",
    weekdayHours: "Mon–Fri: 08:00–22:00",
    weekendHours: "Sat–Sun: 07:00–21:00",
    exploreHeading: "Explore",
    exploreLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Destinations", href: "/destinations" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact-us" },
    ],
    infoHeading: "Connect",
    infoLinks: [
      {
        label: "WhatsApp",
        href: "https://wa.me/94768539902",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/srilankanchauffeurguide",
        external: true,
      },
      {
        label: "TripAdvisor",
        href: "https://www.tripadvisor.com/Attraction_Review-g293962-d0000000",
        external: true,
      },
    ],
    copyright: `© ${new Date().getFullYear()} Sri Lankan Chauffeur Guide • All rights reserved.`,
  },
  floatingBadges: {
    tripAdvisor: "TripAdvisor",
    whatsapp: "WhatsApp",
  },
  destinations: {
    items: DESTINATION_SOURCE.map(({ description, ...rest }) => ({
      ...rest,
      description: description.en,
    })),
  },
};

const de: Translation = {
  nav: {
    menu: [
      { label: "Startseite", href: "/" },
      { label: "Über uns", href: "/about-us" },
      { label: "Reiseziele", href: "/destinations" },
      { label: "Galerie", href: "/gallery" },
      { label: "Kontakt", href: "/contact-us" },
    ],
    ctaLabel: "Kontakt aufnehmen",
  },
  topBar: {
    email: sharedContact.email,
    phone: sharedContact.phone,
    location: "Kalutara North, Sri Lanka",
  },
  hero: {
    heading: "Planen Sie Ihre Sri-Lanka-Reise",
    subheading:
      "Wählen Sie Reiseziele und Daten – wir senden Ihnen ein persönliches Angebot.",
    ctaLabel: "Angebot anfordern",
  },
  home: {
    about: {
      heading: "Über uns",
      subheading:
        "Erfahren Sie mehr darüber, wer wir sind, was wir tun und warum wir Sri Lanka so gerne zeigen.",
      highlightTitle: "Mehr als ein Fahrer – Ihr Gastgeber vor Ort",
      highlightBody:
        "Von Flughafenabholungen bis zu mehrtägigen Touren passen wir jede Route an Ihr Tempo an – mit unseren Lieblingsnebenstraßen, Aussichtspunkten und Essensstopps von Sigiriya bis Ella, Kandy bis Galle.",
      bullets: [
        "Private, individuelle Routen für Paare, Familien und kleine Gruppen",
        "Saubere, klimatisierte Fahrzeuge • Trinkwasser • Fotostopps auf Wunsch",
        "Ehrliche Tipps zu Zeiten, Tickets und den besten Aussichtspunkten",
      ],
      primaryCtaLabel: "Individuelles Angebot erhalten",
      secondaryCtaLabel: "Reiseziele entdecken",
      stats: [
        { value: "8+", label: "Jahre Erfahrung" },
        { value: "50+", label: "Geführte Reisen" },
        { value: "5★", label: "Durchschnittliche Bewertung" },
        { value: "100%", label: "Individuelle Routen" },
      ],
    },
    featuredDestinations: {
      heading: "Beliebte Reiseziele",
      subheading: "Entdecken Sie Sri Lankas berühmteste Orte",
      viewAllLabel: "Alle Reiseziele ansehen",
    },
    socialGallery: {
      heading: "Begleiten Sie unsere Reise",
      subheading:
        "Aktuelle Eindrücke von @srilankanchauffeurguide – Safaris, Hochland und glückliche Gäste",
      ctaPrompt: "Entdecken Sie mehr Videos, Safaris und Gästemomente",
      ctaLabel: "Auf Instagram folgen",
    },
    testimonials: {
      heading: "Gästestimmen",
      subheading:
        "Echte Erfahrungen von Reisenden, die Sri Lanka mit Suresh entdeckt haben",
    },
  },
  contactForm: {
    heading: "Kontakt",
    subheading:
      "Planen Sie Ihr Sri-Lanka-Abenteuer mit uns. Melden Sie sich noch heute.",
    fields: {
      name: { label: "Ihr Name", placeholder: "Max Mustermann" },
      email: { label: "E-Mail-Adresse", placeholder: "max@example.com" },
      message: {
        label: "Ihre Nachricht",
        placeholder: "Erzählen Sie uns von Ihrer Wunschreise durch Sri Lanka...",
      },
    },
    submitLabel: "Nachricht senden",
    successMessage: "Nachricht erfolgreich versendet! Wir melden uns in Kürze.",
    infoHeading: "Kontaktinformationen",
    contactDetails: {
      phoneLabel: "Telefon",
      phoneValue: sharedContact.phone,
      emailLabel: "E-Mail",
      emailValue: sharedContact.email,
      whatsappLabel: "WhatsApp",
      whatsappValue: "Mit uns chatten",
      locationLabel: "Standort",
      locationValue:
        "151/2/1, Weniwelkatiyagama, Nagoda, Dodangoda, Kalutara North, Sri Lanka",
    },
  },
  pages: {
    about: {
      heroHeading: "Über uns",
      heroSubheading:
        "Entdecken Sie Sri Lanka mit zuverlässigen Chauffeur-Guides – sicher, flexibel und authentisch.",
      highlightTitle: "Mehr als ein Fahrer – Ihr Gastgeber vor Ort",
      highlightBody:
        "Von Flughafenabholungen bis zu mehrtägigen Touren passen wir jede Route an Ihr Tempo an – mit unseren Lieblingsnebenstraßen, Aussichtspunkten und Essensstopps von Sigiriya bis Ella, Kandy bis Galle. Freuen Sie sich auf komfortable Fahrzeuge, Pünktlichkeit und flexible Planung.",
      bullets: [
        "Private, individuelle Routen für Paare, Familien und kleine Gruppen",
        "Saubere, klimatisierte Fahrzeuge • Trinkwasser • Fotostopps auf Wunsch",
        "Ehrliche Tipps zu Zeiten, Tickets und den besten Aussichtspunkten",
      ],
      primaryCtaLabel: "Individuelles Angebot erhalten",
      secondaryCtaLabel: "Reiseziele entdecken",
      stats: [
        { value: "8+", label: "Jahre Erfahrung" },
        { value: "50+", label: "Geführte Reisen" },
        { value: "5★", label: "Durchschnittliche Bewertung" },
        { value: "100%", label: "Individuelle Routen" },
      ],
    },
    destinations: {
      heroHeading: "Reiseziele",
      heroSubheading:
        "Entdecken Sie Sri Lankas Highlights mit einem lokalen Chauffeur-Guide.",
    },
    gallery: {
      heroHeading: "Galerie",
      heroSubheading:
        "Momente von der ganzen Insel – Safaris, Hochland und glückliche Gäste.",
      ctaPrompt: "Entdecken Sie mehr Videos, Safaris und Gästemomente",
      ctaLabel: "Auf Instagram folgen",
    },
    contact: {
      heroHeading: "Kontakt",
      heroSubheading:
        "Planen Sie Ihre Sri-Lanka-Reise mit einem lizenzierten Chauffeur-Guide.",
    },
  },
  footer: {
    contactHeading: "Kontakt",
    addressLines: [sharedContact.location],
    phoneLabel: "Telefon",
    phoneNumber: sharedContact.phone,
    emailLabel: "E-Mail",
    emailAddress: sharedContact.email,
    hoursHeading: "Zeiten",
    weekdayHours: "Mo–Fr: 08:00–22:00",
    weekendHours: "Sa–So: 07:00–21:00",
    exploreHeading: "Entdecken",
    exploreLinks: [
      { label: "Startseite", href: "/" },
      { label: "Über uns", href: "/about-us" },
      { label: "Reiseziele", href: "/destinations" },
      { label: "Galerie", href: "/gallery" },
      { label: "Kontakt", href: "/contact-us" },
    ],
    infoHeading: "Vernetzen",
    infoLinks: [
      {
        label: "WhatsApp",
        href: "https://wa.me/94768539902",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/srilankanchauffeurguide",
        external: true,
      },
      {
        label: "TripAdvisor",
        href: "https://www.tripadvisor.com/Attraction_Review-g293962-d0000000",
        external: true,
      },
    ],
    copyright: `© ${new Date().getFullYear()} Sri Lankan Chauffeur Guide • Alle Rechte vorbehalten.`,
  },
  floatingBadges: {
    tripAdvisor: "TripAdvisor",
    whatsapp: "WhatsApp",
  },
  destinations: {
    items: DESTINATION_SOURCE.map(({ description, ...rest }) => ({
      ...rest,
      description: description.de,
    })),
  },
};

const translations: Record<Language, Translation> = {
  en,
  de,
};

export type TranslationContent = Translation;

export default translations;
