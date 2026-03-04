// ─── Clinic4U site data ───────────────────────────────────────────────────────
// Content migrated from clinic4u.ie

export const CLINIC = {
  name: "Clinic4U",
  tagline: "Dublin's Premier Dental & Aesthetic Clinic",
  description:
    "Family dental practice and aesthetic medi-spa in the heart of Dublin. Walk-in welcome. Open 6 days a week.",
  phone: "01 476 3949",
  phoneMobile: "087 397 7779",
  whatsapp: "353873977779",
  email: "clinic4u.ie@gmail.com",
  address: {
    street: "Phibsborough Road",
    area: "Phibsborough",
    city: "Dublin 7",
    country: "Ireland",
    postcode: "D07 T2C8",
    mapsUrl:
      "https://www.google.com/maps/search/Clinic4U+Phibsborough+Dublin+7",
  },
  booking: {
    url: "https://clinic4u3906.setmore.com/",
    embedUrl: "https://clinic4u3906.setmore.com/",
  },
  social: {
    facebook: "https://www.facebook.com/clinic4u.ie",
    instagram: "https://www.instagram.com/clinic4u.ie",
    twitter: null,
  },
  hours: [
    { day: "Monday", open: "09:00", close: "19:00" },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "17:00" },
    { day: "Saturday", open: "09:00", close: "14:00" },
    { day: "Sunday", open: null, close: null },
  ],
  rating: 4.9,
  reviewCount: 200,
  googleRating: "4.9 / 5",
  humm: true,
  prsi: true,
  emergency: true,
} as const;

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  specialty: string;
  bio: string;
  qualifications: string[];
  image: string;
  languages?: string[];
}

export const TEAM: TeamMember[] = [
  {
    id: "dr-laura-oponowicz",
    name: "Dr. Laura Oponowicz",
    title: "BDS, MSc Oral Surgery",
    role: "Lead Implant Surgeon & Prosthodontist",
    specialty: "Dental Implants & Oral Surgery",
    bio: "Dr. Laura is Clinic4U's trusted expert in restoring smiles. She holds a Master's Degree in Oral Surgery, Implantology and Dental Prosthesis from Madrid and specialises in full oral rehabilitations on dental implants. Having worked in the Department of Maxillofacial Surgery at some of the most renowned hospitals in Madrid, she brings world-class expertise to every treatment.",
    qualifications: [
      "MSc Oral Surgery, Implantology & Dental Prosthesis — Madrid",
      "Specialist Degree in Oral Surgery",
      "Periodontal & Peri-Implant Plastic Surgery — Universidad Complutense Madrid",
    ],
    image: "/images/team-laura.jpg",
    languages: ["English", "Spanish", "Polish"],
  },
  {
    id: "dr-sani-bello-dangaji",
    name: "Dr. Sani Bello Dangaji",
    title: "BDS, Oral & Maxillofacial Surgery",
    role: "General & Cosmetic Dentist",
    specialty: "General Dentistry & Dental Surgery",
    bio: "Dr. Sani graduated from Donetsk State Medical University in 2005 and subsequently completed his internship in Oral and Dental Surgery, acquiring specialisation in Oral and Maxillofacial Surgery. With a passion for pain-free procedures and a remarkably fast healing process, Dr. Sani ensures every patient leaves feeling confident about their care.",
    qualifications: [
      "BDS — Donetsk State Medical University (2005)",
      "Internship in Oral & Dental Surgery",
      "Specialisation: Oral & Maxillofacial Surgery",
    ],
    image: "/images/team-sani.jpg",
    languages: ["English", "French"],
  },
  {
    id: "dr-hadil-saidam",
    name: "Dr. Hadil Saidam",
    title: "BDS, Orthodontics",
    role: "Orthodontist",
    specialty: "Orthodontics & Clear Aligners",
    bio: "Dr. Hadil is Clinic4U's specialist in Orthodontics, ensuring your teeth achieve their optimal appearance. Appointed as Orthodontist at Clinic4U in 2022, she is a graduate of Grigore T. Popa University School of Dentistry — one of the most reputable dental schools in Romania. She is particularly skilled in helping patients with crowded teeth or uncomfortable smiles, and her expertise boosts confidence as well as health.",
    qualifications: [
      "BDS — Grigore T. Popa University School of Dentistry, Romania",
      "Specialist in Orthodontics",
      "Clear Aligner Certified Practitioner",
    ],
    image: "/images/team-hadil.jpg",
    languages: ["English", "Arabic", "Romanian"],
  },
];

// ─── Dental Services ──────────────────────────────────────────────────────────

export interface Service {
  id: string;
  category: "dental" | "beauty";
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  icon: string;
  highlights?: string[];
  image?: string;
}

export const DENTAL_SERVICES: Service[] = [
  {
    id: "dental-checkup",
    category: "dental",
    slug: "checkup-hygiene",
    name: "Dental Check-up & Hygiene",
    shortDesc: "Thorough examinations and professional cleaning to keep your smile at its best.",
    description:
      "Regular check-ups are the foundation of a healthy mouth. Our dentists carry out a comprehensive examination including X-rays when needed, checking teeth, gums, soft tissue and bite alignment. A professional clean by our hygienist removes built-up tartar and plaque that brushing alone cannot reach.",
    icon: "tooth",
    highlights: ["Digital X-rays", "Oral cancer screening", "Personalised homecare plan"],
    image: "/images/services/checkup.jpg",
  },
  {
    id: "teeth-whitening",
    category: "dental",
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDesc: "Safe, clinician-supervised whitening for a noticeably brighter smile.",
    description:
      "We offer both in-chair power whitening and custom take-home kits. Our whitening treatments are performed under dental supervision, ensuring safety and comfort throughout. Most patients see a change of several shades in a single session.",
    icon: "sparkles",
    highlights: ["In-chair & take-home options", "Clinician supervised", "Long-lasting results"],
    image: "/images/services/whitening.jpg",
  },
  {
    id: "dental-fillings",
    category: "dental",
    slug: "fillings",
    name: "Dental Fillings",
    shortDesc: "Tooth-coloured composite fillings that blend seamlessly with your smile.",
    description:
      "Fillings are the first line of defence against tooth decay. We use white (tooth-coloured) composite resin materials that look natural and bond directly to the tooth structure, meaning we remove less healthy enamel than with older amalgam techniques.",
    icon: "shield",
    highlights: ["Tooth-coloured composite", "Mercury-free", "Same-day treatment"],
    image: "/images/services/fillings.jpg",
  },
  {
    id: "root-canal",
    category: "dental",
    slug: "root-canal",
    name: "Root Canal Treatment",
    shortDesc: "Pain-free root canal therapy to save infected or damaged teeth.",
    description:
      "Modern root canal therapy is far more comfortable than its reputation suggests. Using precision instruments and effective anaesthesia, our dentists remove the infected pulp, clean and shape the root canals, then seal the tooth — saving it from extraction.",
    icon: "activity",
    highlights: ["Pain-free procedure", "Tooth preservation", "Same-day relief"],
    image: "/images/services/root-canal.jpg",
  },
  {
    id: "dental-implants",
    category: "dental",
    slug: "dental-implants",
    name: "Dental Implants",
    shortDesc: "Permanent, natural-looking tooth replacements anchored to your jawbone.",
    description:
      "Dental implants are the gold standard for replacing missing teeth. Led by Dr. Laura Oponowicz — a specialist in oral surgery and implantology — our implant procedures take place in a sterile, stress-free environment. Implants look, feel and function like natural teeth, and with proper care can last a lifetime.",
    icon: "zap",
    highlights: ["Specialist-led procedure", "Full-arch available", "Lifetime solution"],
    image: "/images/services/implants.jpg",
  },
  {
    id: "orthodontics",
    category: "dental",
    slug: "orthodontics",
    name: "Orthodontics & Braces",
    shortDesc: "Traditional braces and clear aligners to straighten teeth at any age.",
    description:
      "Under the care of Dr. Hadil Saidam, our orthodontic treatments correct crooked, crowded or misaligned teeth for children, teens and adults alike. We offer both traditional fixed braces and discreet clear aligner systems for a straighter, healthier smile.",
    icon: "align-center",
    highlights: ["Clear aligners available", "All ages welcome", "Free consultation"],
    image: "/images/services/ortho.jpg",
  },
  {
    id: "dental-crowns",
    category: "dental",
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    shortDesc: "Custom-fitted restorations to protect and restore damaged or missing teeth.",
    description:
      "Dental crowns cover a damaged or weakened tooth to restore its shape, size, strength and appearance. Bridges fill the gap left by one or more missing teeth by anchoring an artificial tooth to the adjacent natural teeth. Both are crafted to blend naturally with your smile.",
    icon: "award",
    highlights: ["Porcelain & zirconia options", "Colour-matched", "Long-lasting"],
    image: "/images/services/crowns.jpg",
  },
  {
    id: "extractions",
    category: "dental",
    slug: "extractions",
    name: "Tooth Extractions",
    shortDesc: "Gentle, pain-managed extractions including wisdom teeth.",
    description:
      "When a tooth is too damaged or decayed to save, extraction may be necessary. Our dentists prioritise patient comfort, using effective anaesthesia and gentle techniques. Wisdom tooth removal, surgical extractions and simple extractions are all carried out in-house.",
    icon: "scissors",
    highlights: ["Wisdom tooth removal", "Surgical extractions", "Aftercare advice"],
    image: "/images/services/extraction.jpg",
  },
  {
    id: "dentures",
    category: "dental",
    slug: "dentures",
    name: "Dentures",
    shortDesc: "High-quality full and partial dentures, including repair and management.",
    description:
      "We provide full and partial dentures made to the highest quality standards. If you already have dentures that need adjustment or repair, we offer a comprehensive denture management service. Implant-retained dentures are also available for greater stability and confidence.",
    icon: "smile",
    highlights: ["Full & partial options", "Same-day repairs", "Implant-supported available"],
    image: "/images/services/dentures.jpg",
  },
  {
    id: "emergency",
    category: "dental",
    slug: "emergency-dentist",
    name: "Emergency Dentist",
    shortDesc: "Same-day emergency appointments for urgent dental pain or injury.",
    description:
      "Dental emergencies can happen at any time. At Clinic4U, we reserve emergency slots every day to provide timely and compassionate care. Whether you have severe toothache, a broken tooth, a knocked-out tooth or a lost filling, call us and we'll do our best to see you that day.",
    icon: "alert-circle",
    highlights: ["Same-day slots", "Walk-in welcome", "Dublin 7 location"],
    image: "/images/services/emergency.jpg",
  },
];

export const BEAUTY_SERVICES: Service[] = [
  {
    id: "lip-fillers",
    category: "beauty",
    slug: "lip-fillers",
    name: "Lip Fillers",
    shortDesc: "Natural-looking volume and definition using premium hyaluronic acid fillers.",
    description:
      "Lip filler treatments at Clinic4U use premium hyaluronic acid to add volume, define the border and improve symmetry. Our practitioners tailor every treatment to complement your natural features. Results typically last 6–12 months.",
    icon: "heart",
    highlights: ["Natural-looking results", "Lasts 6–12 months", "Medical-grade product"],
    image: "/images/services/lip-fillers.jpg",
  },
  {
    id: "anti-wrinkle-women",
    category: "beauty",
    slug: "anti-wrinkle-women",
    name: "Anti-Wrinkle Injections — Women",
    shortDesc: "Clinician-administered Botulinum toxin to soften fine lines and prevent new ones.",
    description:
      "Our anti-wrinkle injections use Botulinum toxin type A to temporarily relax the facial muscles that cause expression lines — forehead lines, frown lines and crow's feet. Treatment takes around 20 minutes, with results visible in 5–7 days and lasting 3–4 months.",
    icon: "star",
    highlights: ["20-minute treatment", "Results in 5–7 days", "Doctor-administered"],
    image: "/images/services/anti-wrinkle-women.jpg",
  },
  {
    id: "anti-wrinkle-men",
    category: "beauty",
    slug: "anti-wrinkle-men",
    name: "Anti-Wrinkle Injections — Men",
    shortDesc: "Tailored anti-wrinkle treatments using natural male facial anatomy principles.",
    description:
      "Men's facial musculature differs from women's, and our injectors are trained to deliver results that preserve the natural masculinity of the face. A popular lunchtime treatment with no downtime and natural-looking outcomes.",
    icon: "user",
    highlights: ["Male-specific technique", "No downtime", "Natural outcome"],
    image: "/images/services/anti-wrinkle-men.jpg",
  },
  {
    id: "profhilo",
    category: "beauty",
    slug: "profhilo",
    name: "Profhilo",
    shortDesc: "Bio-remodelling treatment to deeply hydrate and tighten lax skin.",
    description:
      "Profhilo is one of the most innovative skin bio-remodelling treatments available. Unlike traditional fillers, it spreads through the skin to stimulate collagen and elastin production, improving texture, firmness and hydration. Ideal for the face, neck and décolletage.",
    icon: "droplets",
    highlights: ["Collagen stimulation", "Face, neck & hands", "2-session protocol"],
    image: "/images/services/profhilo.jpg",
  },
];

export const ALL_SERVICES = [...DENTAL_SERVICES, ...BEAUTY_SERVICES];

// ─── Pricing ──────────────────────────────────────────────────────────────────

export interface PricingItem {
  name: string;
  price: string;
  note?: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  items: PricingItem[];
}

export const PRICING: PricingCategory[] = [
  {
    id: "general",
    title: "General Dentistry",
    items: [
      { name: "New Patient Examination", price: "€60" },
      { name: "Dental Check-up", price: "€50" },
      { name: "Hygiene / Scale & Polish", price: "€70" },
      { name: "Emergency Consultation", price: "€60" },
      { name: "Dental X-Ray (per film)", price: "€20" },
      { name: "OPG Full Mouth X-Ray", price: "€80" },
    ],
  },
  {
    id: "restorative",
    title: "Restorative & Cosmetic",
    items: [
      { name: "White Composite Filling (1 surface)", price: "From €120" },
      { name: "White Composite Filling (2+ surfaces)", price: "From €150" },
      { name: "Root Canal Treatment (front tooth)", price: "From €350" },
      { name: "Root Canal Treatment (molar)", price: "From €500" },
      { name: "Porcelain Crown", price: "From €700" },
      { name: "Zirconia Crown", price: "From €800" },
      { name: "Dental Bridge (per unit)", price: "From €700" },
      { name: "Teeth Whitening (in-chair)", price: "€350" },
      { name: "Teeth Whitening (take-home kit)", price: "€250" },
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    items: [
      { name: "Single Implant (implant + crown)", price: "From €1,800" },
      { name: "Implant Consultation", price: "€80", note: "Redeemable against treatment" },
      { name: "Implant-Retained Denture", price: "From €3,200" },
      { name: "All-on-4 (full arch)", price: "POA" },
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    items: [
      { name: "Orthodontic Consultation", price: "€80" },
      { name: "Fixed Metal Braces", price: "From €2,500" },
      { name: "Clear Aligners (full treatment)", price: "From €2,800" },
      { name: "Retainers (per arch)", price: "€150" },
    ],
  },
  {
    id: "extractions",
    title: "Extractions & Surgery",
    items: [
      { name: "Simple Extraction", price: "From €120" },
      { name: "Surgical Extraction", price: "From €200" },
      { name: "Wisdom Tooth Removal (simple)", price: "From €180" },
      { name: "Wisdom Tooth Removal (surgical)", price: "From €280" },
    ],
  },
  {
    id: "dentures",
    title: "Dentures",
    items: [
      { name: "Full Upper or Lower Denture", price: "From €850" },
      { name: "Partial Denture", price: "From €600" },
      { name: "Denture Repair", price: "From €80" },
      { name: "Denture Reline", price: "From €200" },
    ],
  },
  {
    id: "beauty",
    title: "Aesthetic & Beauty Treatments",
    items: [
      { name: "Lip Fillers (0.5ml)", price: "€180" },
      { name: "Lip Fillers (1ml)", price: "€250" },
      { name: "Anti-Wrinkle Injections (1 area)", price: "€150" },
      { name: "Anti-Wrinkle Injections (2 areas)", price: "€200" },
      { name: "Anti-Wrinkle Injections (3 areas)", price: "€250" },
      { name: "Profhilo (2-session course)", price: "€600" },
      { name: "Dermal Filler (per ml)", price: "From €250" },
    ],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  treatment?: string;
  date?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Maria K.",
    rating: 5,
    text: "I can't thank Dr. Laura enough for the exceptional care and professionalism throughout my dental implant treatment. From the very first consultation, she made me feel heard and supported. Two implants later, my smile is transformed.",
    treatment: "Dental Implants",
    date: "2024-11",
  },
  {
    id: "t2",
    name: "James O.",
    rating: 5,
    text: "Had an emergency appointment on a Saturday morning — they fitted me in within the hour. Incredible service and genuine compassion from the entire team. Highly recommend for anyone in Dublin 7.",
    treatment: "Emergency Dentistry",
    date: "2024-10",
  },
  {
    id: "t3",
    name: "Aoife M.",
    rating: 5,
    text: "Dr. Hadil is fantastic. My braces journey took 18 months and she guided me through every step with patience and expertise. My smile looks amazing and I feel so confident.",
    treatment: "Orthodontics",
    date: "2024-12",
  },
  {
    id: "t4",
    name: "Fatima A.",
    rating: 5,
    text: "The multicultural team made me feel so welcome — they genuinely understand different patient needs. The clinic is spotless, modern and the prices are fair. I've been coming here for two years.",
    treatment: "General Check-up",
    date: "2025-01",
  },
  {
    id: "t5",
    name: "Eoin B.",
    rating: 5,
    text: "Had lip fillers done here — absolutely natural results. The practitioner took real time to understand what I wanted and the result was exactly what I was hoping for. Very professional environment.",
    treatment: "Lip Fillers",
    date: "2025-02",
  },
  {
    id: "t6",
    name: "Sorcha N.",
    rating: 5,
    text: "Best whitening I've ever had. Two shades brighter after one session and no sensitivity. The process was explained to me step by step. Will definitely be back.",
    treatment: "Teeth Whitening",
    date: "2024-09",
  },
];

// ─── FAQs ──────────────────────────────────────────────────────────────────────

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  {
    id: "f1",
    category: "General",
    question: "Do I need to book in advance?",
    answer:
      "We welcome walk-in patients whenever possible, but booking in advance guarantees your preferred time and doctor. You can book online 24/7 via our booking portal, or call us on 01 476 3949.",
  },
  {
    id: "f2",
    category: "General",
    question: "Are you accepting new patients?",
    answer:
      "Yes — we are always welcoming new patients, including families, children and adults of all ages. We also cater for overseas patients and tourists who need dental care while visiting Ireland.",
  },
  {
    id: "f3",
    category: "General",
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday 9am–7pm and Saturday 9am–2pm. We are closed on Sundays. Emergency slots are available every day we are open.",
  },
  {
    id: "f4",
    category: "Payment",
    question: "Do you accept PRSI dental benefit?",
    answer:
      "Yes. The PRSI Dental Benefit scheme entitles eligible PAYE workers to a free dental exam and subsidised treatments each year. Bring your PPS number and we'll check your eligibility at reception.",
  },
  {
    id: "f5",
    category: "Payment",
    question: "Do you offer payment plans?",
    answer:
      "Yes. We offer flexible financing through Humm, allowing you to spread the cost of your treatment over time with manageable monthly payments. Ask at reception for details.",
  },
  {
    id: "f6",
    category: "Payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit and debit cards, and Humm finance. Payment is due on the day of treatment unless a finance plan is agreed in advance.",
  },
  {
    id: "f7",
    category: "Dental",
    question: "Is a dental check-up painful?",
    answer:
      "A standard check-up is entirely pain-free. If you are anxious about dental visits, please let us know and we'll do everything possible to make your experience comfortable and stress-free.",
  },
  {
    id: "f8",
    category: "Dental",
    question: "How long does a dental implant take?",
    answer:
      "Dental implant treatment usually takes place over several visits spanning 3–6 months, to allow for osseointegration (the implant fusing with the bone). The initial surgical procedure takes around 1–2 hours.",
  },
  {
    id: "f9",
    category: "Beauty",
    question: "How long do lip fillers last?",
    answer:
      "Lip fillers typically last between 6 and 12 months, depending on the product used and individual metabolism. A top-up appointment can extend results.",
  },
  {
    id: "f10",
    category: "Beauty",
    question: "Are anti-wrinkle injections safe?",
    answer:
      "Yes, when administered by a qualified medical professional. All our aesthetic treatments are performed by trained practitioners with a medical background. We use fully licensed and regulated products.",
  },
  {
    id: "f11",
    category: "Emergency",
    question: "What counts as a dental emergency?",
    answer:
      "A dental emergency includes: severe toothache, swelling of the face or jaw, a knocked-out tooth, a cracked or broken tooth causing pain, a lost filling or crown causing pain, or bleeding that won't stop after an extraction.",
  },
  {
    id: "f12",
    category: "Emergency",
    question: "What should I do if I knock out a tooth?",
    answer:
      "Keep the tooth moist — place it in milk or hold it in your cheek (do not scrub it). Call us immediately on 01 476 3949. The sooner you get to us, the better the chance of re-implanting the tooth.",
  },
];
