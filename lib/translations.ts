export type Language = "en" | "de";

type DestinationRecord = {
  id: string;
  name: string;
  image: string;
  description: Record<Language, string>;
  article: Record<Language, string>;
};

type Destination = {
  id: string;
  name: string;
  image: string;
  description: string;
  article: string;
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Sigiriya_rock%2C_Sri_Lanka.jpg",
    description: {
      en: "Ancient rock fortress with stunning views.",
      de: "Antike Felsenfestung mit atemberaubender Aussicht.",
    },
    article: {
      en: "Climb the Lion Rock early for cooler air and sweeping views over jungle plains. Explore the frescoes, mirror wall, and landscaped water gardens before sunset.",
      de: "Steigen Sie früh auf den Löwenfelsen, um kühle Luft und weite Ausblicke zu genießen. Entdecken Sie Fresken, Spiegelwand und die königlichen Wassergärten.",
    },
  },
  {
    id: "ella",
    name: "Ella",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Nine_Arches_Bridge%2C_Ella%2C_Sri_Lanka.jpg",
    description: {
      en: "Tea country hikes and epic viewpoints.",
      de: "Wanderungen im Teeland und spektakuläre Aussichtspunkte.",
    },
    article: {
      en: "Ride the scenic hill-country train and walk to Nine Arches Bridge at golden hour. Hike Little Adam’s Peak for a quick panorama over tea estates.",
      de: "Fahren Sie mit dem Panorama-Zug durchs Hochland und besuchen Sie die Nine Arches Bridge bei goldenem Licht. Der Little Adam’s Peak bietet einen schnellen Blick über Teeplantagen.",
    },
  },
  {
    id: "kandy",
    name: "Kandy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Temple_of_the_Tooth%2C_Kandy%2C_Sri_Lanka.jpg",
    description: {
      en: "Cultural heart and sacred Temple of the Tooth.",
      de: "Kulturelles Zentrum mit dem heiligen Zahntempel.",
    },
    article: {
      en: "Visit the Temple of the Tooth for evening puja and walk the lakeside loop. The city’s markets and craft shops are perfect for tea and souvenirs.",
      de: "Besuchen Sie den Zahntempel zur Abend-Puja und spazieren Sie um den See. Märkte und Handwerksläden eignen sich ideal für Tee und Souvenirs.",
    },
  },
  {
    id: "galle",
    name: "Galle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Galle_fort_lighthouse_2017.jpg",
    description: {
      en: "Historic fort walls and coastal charm.",
      de: "Historische Festungsmauern und Küstenflair.",
    },
    article: {
      en: "Stroll the UNESCO-listed fort ramparts for sea breezes and colonial streets. Sunset by the lighthouse pairs well with cafés and boutique galleries.",
      de: "Spazieren Sie auf den UNESCO-Festungsmauern mit Meeresbrise und kolonialen Gassen. Sonnenuntergang am Leuchtturm passt zu Cafés und Galerien.",
    },
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mirissa_Beach%2C_Sri_Lanka.jpg",
    description: {
      en: "Golden bay and whale-watch mornings.",
      de: "Goldene Bucht und Walbeobachtung am Morgen.",
    },
    article: {
      en: "Book a morning whale-watching cruise in season, then unwind on the wide sandy bay. Coconut Tree Hill is the classic Mirissa viewpoint.",
      de: "Buchen Sie in der Saison eine morgendliche Whale-Watching-Tour und entspannen Sie danach am breiten Sandstrand. Coconut Tree Hill ist der bekannte Aussichtspunkt.",
    },
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Nuwara_Eliya_Town.jpg",
    description: {
      en: "Cool climate, tea estates, colonial vibe.",
      de: "Kühles Klima, Teeplantagen und koloniales Flair.",
    },
    article: {
      en: "Expect crisp air, rolling tea fields, and colonial-era bungalows. Visit Gregory Lake, tour a tea factory, and enjoy a calm evening stroll.",
      de: "Freuen Sie sich auf frische Luft, Teeberge und koloniale Bungalows. Besuchen Sie den Gregory Lake, eine Teefabrik und genießen Sie den Abendspaziergang.",
    },
  },
  {
    id: "ambuluwawa",
    name: "Ambuluwawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Ambuluwawa_Tower%2C_Sri_Lanka.jpg",
    description: {
      en: "Iconic spiral tower with 360° mountain views.",
      de: "Ikonischer Turm mit 360°-Bergpanorama.",
    },
    article: {
      en: "The white spiral tower climbs steeply to panoramic views of surrounding peaks. It’s a short but thrilling stop near Gampola and Kandy.",
      de: "Der weiße Spiralturm führt steil zu Rundumblicken auf die Berge. Ein kurzer, aber aufregender Stopp nahe Gampola und Kandy.",
    },
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ruwanwelisaya_Stupa_Anuradhapura.jpg",
    description: {
      en: "Sacred city of ancient stupas and ruins.",
      de: "Heilige Stadt mit alten Stupas und Ruinen.",
    },
    article: {
      en: "Sri Lanka’s ancient capital is dotted with massive dagobas and sacred sites. Plan time for the Sri Maha Bodhi and the vast monastic ruins.",
      de: "Die alte Hauptstadt ist voller großer Dagobas und heiliger Stätten. Planen Sie Zeit für den Sri Maha Bodhi und die weitläufigen Ruinen ein.",
    },
  },
  {
    id: "arugambay",
    name: "Arugam Bay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Arugam_Bay_Beach%2C_Sri_Lanka.jpg",
    description: {
      en: "Laid-back surf town on the east coast.",
      de: "Entspannter Surfort an der Ostküste.",
    },
    article: {
      en: "Known for its point breaks, Arugam Bay is a surfer’s paradise with a chilled vibe. Pair beach time with lagoon safaris or sunrise yoga.",
      de: "Arugam Bay ist für seine Point Breaks bekannt und bietet eine entspannte Surfer-Atmosphäre. Kombinieren Sie Strandtage mit Lagunen-Safaris oder Yoga bei Sonnenaufgang.",
    },
  },
  {
    id: "awissawella",
    name: "Awissawella",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Seethawaka_Wet_Zone_Botanical_Garden.jpg",
    description: {
      en: "Gateway town to lush waterfalls and hills.",
      de: "Tor zu üppigen Wasserfällen und Hügeln.",
    },
    article: {
      en: "A convenient base for the Seethawaka Botanical Garden and nearby rainforest hikes. It’s an easy day trip from Colombo for greener scenery.",
      de: "Ein guter Ausgangspunkt für den Seethawaka Botanical Garden und nahe Regenwaldwanderungen. Ein einfacher Tagesausflug ab Colombo ins Grüne.",
    },
  },
  {
    id: "belihuloya",
    name: "Belihuloya",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Samanalawewa_Reservoir_Belihuloya.jpg",
    description: {
      en: "Quiet rivers, trekking, and eco stays.",
      de: "Stille Flüsse, Trekking und Öko-Lodges.",
    },
    article: {
      en: "Stay near rivers and the Samanalawewa Reservoir for peaceful scenery. The area is ideal for gentle hikes, waterfalls, and eco-friendly retreats.",
      de: "Genießen Sie Flüsse und das Samanalawewa-Reservoir in ruhiger Landschaft. Die Gegend eignet sich für leichte Wanderungen, Wasserfälle und Öko-Retreats.",
    },
  },
  {
    id: "colombo",
    name: "Colombo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Lotus_Tower_Colombo_Sri_Lanka.jpg",
    description: {
      en: "Cosmopolitan capital with heritage lanes.",
      de: "Kosmopolitische Hauptstadt mit historischen Gassen.",
    },
    article: {
      en: "Mix colonial landmarks with modern cafes, street food, and seafront walks. Galle Face Green and the Lotus Tower show the city’s lively energy.",
      de: "Kombinieren Sie koloniale Highlights mit Cafés, Street Food und Promenaden. Galle Face Green und der Lotus Tower zeigen Colombos Energie.",
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
    items: DESTINATION_SOURCE.map(({ description, article, ...rest }) => ({
      ...rest,
      description: description.en,
      article: article.en,
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
    items: DESTINATION_SOURCE.map(({ description, article, ...rest }) => ({
      ...rest,
      description: description.de,
      article: article.de,
    })),
  },
};

const translations: Record<Language, Translation> = {
  en,
  de,
};

export type TranslationContent = Translation;

export default translations;
