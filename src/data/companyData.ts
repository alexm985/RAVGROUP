export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  tagline: string;
  features: string[];
  materials: string[];
  applications: string[];
  image: string;
  imageAlt: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  suitableSolutions: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'PREFAB' | 'WOODEN' | 'ROOFING' | 'CLADDING' | 'INTERIORS';
  categoryLabel: string;
  location: string;
  scale: string;
  materialsUsed: string[];
  description: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  keyProducts: {
    name: string;
    specs: string;
    grades?: string;
  }[];
  advantages: string[];
  image: string;
}

export const COMPANY_CONFIG = {
  name: "RAVGROUP (INDIA) PRIVATE LIMITED",
  shortName: "RAVGROUP",
  countryDivision: "INDIA PRIVATE LIMITED",
  tagline: "Prefab & Wooden Solutions | Roofing | Ceiling | Cladding | Flooring | Ply & Boards",
  phone: "+91 87550 89501",
  phoneFormatted: "+91 87550 89501",
  whatsappNumber: "918755089501", // 10-12 digits without symbols for wa.me
  whatsappMessage: "Hello RAVGROUP team, I would like to inquire about architectural materials and prefab solutions for my upcoming project.",
  email: "contact@ravgroup.in",
  salesEmail: "projects@ravgroup.in",
  address: "Cement Town, Dehradun - 248001, Uttarakhand, India",
  operatingHours: "Monday - Saturday: 9:30 AM - 6:30 PM IST",
  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://x.com"
  }
};

export const TRUST_POINTS = [
  {
    title: "Prefab & Wooden Solutions",
    subtitle: "Engineered luxury structures & resorts"
  },
  {
    title: "Complete Material Range",
    subtitle: "From foundation frame to finishing"
  },
  {
    title: "Project-Based Solutions",
    subtitle: "Tailored for hospitality & developers"
  },
  {
    title: "Quality-Focused",
    subtitle: "Tested to rigorous Indian & global codes"
  },
  {
    title: "Professional Support",
    subtitle: "Architectural consultation & site delivery"
  }
];

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: "prefab-wooden",
    number: "01",
    title: "Prefab & Wooden Resorts / Cottages",
    subtitle: "Luxury Modular & Glulam Architecture",
    description: "Complete material and solution support for premium wooden cottages, resorts, cabins, farmhouses and hospitality projects.",
    tagline: "Speed, elegance, and sustainable luxury in one turnkey solution.",
    features: [
      "Engineered Canadian Pinewood & Russian Larch timber",
      "Factory prefabricated precision modular wall panels",
      "Termite, borer, and all-weather high-altitude treatment",
      "Rapid on-site assembly with zero structural compromise"
    ],
    materials: ["Glulam Beams", "Spruce Timber", "Sip Panels", "Thermal Barrier Membrane"],
    applications: ["Eco Resorts", "Mountain Cottages", "Wellness Retreats", "Luxury Farmhouses"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Luxury wooden prefab resort cottage nestled in scenic valley"
  },
  {
    id: "roofing",
    number: "02",
    title: "Roofing",
    subtitle: "Engineered Durability & Sleek Horizons",
    description: "Reliable roofing solutions designed for durability, performance and architectural appeal.",
    tagline: "Weather-resistant, thermally insulated profiles for severe climates.",
    features: [
      "Standing seam standing zinc & aluminum coated panels",
      "Architectural asphalt shingles & stone-coated metal tiles",
      "Superior UV-reflective pigments for low thermal absorption",
      "Concealed fastener systems for sleek modern aesthetics"
    ],
    materials: ["Galvalume Standing Seam", "Architectural Shingles", "Insulated Polyurethane Panels", "Clay Shingle Systems"],
    applications: ["Resort Pavilions", "Chalet Gables", "Modern Commercial", "Villas"],
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contemporary architectural standing seam roof on luxury villa"
  },
  {
    id: "ceiling",
    number: "03",
    title: "Ceiling",
    subtitle: "Acoustic Warmth & Geometric Refinement",
    description: "Modern ceiling solutions for residential, commercial and hospitality spaces.",
    tagline: "Elevate volume with acoustic control and natural textures.",
    features: [
      "Linear natural wood-slat & micro-perforated acoustic panels",
      "Baffle ceiling systems with integrated architectural lighting",
      "High-humidity moisture-resistant gypsum & composite cores",
      "Class A fire-rated options for commercial hospitality safety"
    ],
    materials: ["Acoustic Timber Slats", "Aluminum Baffles", "Mineral Fiber Tiles", "Perforated Gypsum"],
    applications: ["Hotel Lobbies", "Banquet Halls", "Luxury Lounges", "Boardrooms"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern wood slat acoustic ceiling system with ambient lighting"
  },
  {
    id: "cladding",
    number: "04",
    title: "Cladding",
    subtitle: "Distinctive Exterior & Interior Envelopes",
    description: "Premium exterior and interior cladding solutions for distinctive architectural finishes.",
    tagline: "Timeless facades that age gracefully in any climate.",
    features: [
      "Thermally modified wood (Thermo-Ash / Thermo-Pine)",
      "High-pressure laminate (HPL) & fiber cement architectural boards",
      "Back-ventilated rainscreen facade sub-structure engineering",
      "Zero-fade UV resistance with low maintenance cycles"
    ],
    materials: ["Thermo-Wood Louvers", "HPL Exterior Panels", "Composite Deck Cladding", "Stone Veneer Composite"],
    applications: ["Resort Facades", "Signature Villas", "High-End Retail", "Feature Accent Walls"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Luxury exterior timber louvers and composite architectural cladding"
  },
  {
    id: "flooring",
    number: "05",
    title: "Flooring",
    subtitle: "Tactile Elegance & High-Traffic Longevity",
    description: "Durable and visually refined flooring solutions for modern spaces.",
    tagline: "Engineered for high footfall without sacrificing natural warmth.",
    features: [
      "Engineered multi-layer hardwood with European oak wear layers",
      "Heavy-duty SPC / luxury vinyl tile with sound-deadening underlayment",
      "Exterior composite decking (WPC) for pool decks and verandas",
      "Stain, scratch, and moisture resistant locking joints"
    ],
    materials: ["Engineered Hardwood", "WPC Outdoor Decking", "Commercial Grade SPC", "Solid Teak Flooring"],
    applications: ["Resort Suites", "Pool Decks", "Fine Dining Restaurants", "Luxury Residences"],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Premium wide-plank engineered wooden flooring and outdoor deck"
  },
  {
    id: "ply-boards",
    number: "06",
    title: "Ply & Boards",
    subtitle: "Structural Integrity & Precision Millwork",
    description: "Quality plywood and board solutions for construction, furniture and interior applications.",
    tagline: "The dependable foundation for structural integrity and cabinetry.",
    features: [
      "Marine grade 710 BWR/BWP calibrated architectural plywood",
      "High-density moisture-resistant (HDHMR) & particle boards",
      "Zero-void core construction for precision CNC router routing",
      "Emission compliant E0/E1 low VOC standards"
    ],
    materials: ["Calibrated BWP Marine Ply", "HDHMR Panels", "MDF Commercial Grade", "Block Boards"],
    applications: ["Modular Kitchens", "Wardrobes", "Architectural Millwork", "Partitions"],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Calibrated high-density plywood and architectural board solutions"
  }
];

export const PREFAB_HIGHLIGHTS = [
  {
    title: "WOODEN COTTAGES",
    desc: "Single & double-tier alpine cottages designed for hill resorts and personal vacation retreats."
  },
  {
    title: "RESORTS",
    desc: "Multi-unit hospitality suites, luxury reception pavilions, and wellness clubhouses."
  },
  {
    title: "CABINS",
    desc: "Compact, rapid-installation luxury glamping pods and scenic wilderness sanctuaries."
  },
  {
    title: "FARMHOUSES",
    desc: "Expansive custom wooden estates combining rustic warmth with modern luxury finishes."
  }
];

export const APPLICATIONS_LIST: ApplicationItem[] = [
  {
    id: "hotels-resorts",
    title: "Hotels & Resorts",
    subtitle: "Hospitality Flagships",
    description: "Turnkey material packages engineered for high-turnover guest comfort, fire codes, and acoustic isolation.",
    suitableSolutions: ["Prefab Cottages", "Acoustic Ceilings", "WPC Decking", "Architectural Cladding"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "wooden-cottages",
    title: "Wooden Cottages",
    subtitle: "Alpine & Hill Architecture",
    description: "Engineered timber envelopes providing superior thermal inertia during cold winters and balmy summers.",
    suitableSolutions: ["Prefab Structures", "Standing Seam Roofing", "Timber Flooring", "Exterior Louvers"],
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "farmhouses",
    title: "Farmhouses",
    subtitle: "Expansive Country Living",
    description: "Spacious estates featuring natural wood verandas, vaulted ceilings, and heavy-duty structural plywood millwork.",
    suitableSolutions: ["Glulam Framing", "Engineered Flooring", "Calibrated Ply", "Exterior Siding"],
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "residential-projects",
    title: "Residential Projects",
    subtitle: "Modern Urban Villas",
    description: "Architectural grade materials for discerning homeowners, interior architects, and premium villa builders.",
    suitableSolutions: ["Designer Ceilings", "Hardwood Floors", "Waterproof Ply", "Metal Roofing"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "commercial-buildings",
    title: "Commercial Buildings",
    subtitle: "High-Traffic Corporate Spaces",
    description: "Durable, certified, and fire-resistant products designed for offices, flagship stores, and institutional campuses.",
    suitableSolutions: ["Metal Ceiling Baffles", "HPL Facades", "Commercial SPC", "Fire-Retardant Ply"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "hospitality-projects",
    title: "Hospitality Projects",
    subtitle: "Restaurants & Cafes",
    description: "Distinctive ambiance created with tactile wood surfaces, acoustic control, and seamless outdoor decking.",
    suitableSolutions: ["Timber Slatting", "Outdoor Decking", "Accent Cladding", "Specialty Boards"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "mountain-properties",
    title: "Mountain Properties",
    subtitle: "High-Altitude & Snow Loads",
    description: "Structural components and roofing designed specifically for high snow-load, windshear, and seismic safety.",
    suitableSolutions: ["Modular Prefab", "Insulated Metal Roofing", "Weather-Sealed Cladding", "Thermo-Pine"],
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "construction-projects",
    title: "Construction Projects",
    subtitle: "Large Developer Supply",
    description: "Volume material supply with consistent calibration, certified testing, and direct batch delivery to site.",
    suitableSolutions: ["Calibrated Plywood", "Standard Roofing", "Drywall Ceilings", "Bulk Boards"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
  }
];

export const WHY_RAVGROUP_POINTS = [
  {
    number: "01",
    title: "Complete Material Solutions",
    subtitle: "Single-point supply chain",
    description: "Eliminate coordination delays between disparate vendors. RAVGROUP sources, fabricates, and delivers structural elements through interior finishes."
  },
  {
    number: "02",
    title: "Prefab & Wooden Expertise",
    subtitle: "Engineered timber engineering",
    description: "Decades of collective craftsmanship in glulam structures, modular wall framing, and high-altitude weatherproofing across India."
  },
  {
    number: "03",
    title: "Project-Focused Approach",
    subtitle: "Tailored to your architectural drawings",
    description: "We don't just sell standard SKUs; we review your BOQ, recommend value-engineered specifications, and ensure exact site fitment."
  },
  {
    number: "04",
    title: "Wide Product Categories",
    subtitle: "Six cohesive material divisions",
    description: "Seamless color matching and material compatibility between your exterior cladding, roofing, flooring, ceilings, and internal cabinetry."
  },
  {
    number: "05",
    title: "Professional Support",
    subtitle: "Technical guidance from start to handover",
    description: "Dedicated project managers, on-site technical supervisors, and guaranteed manufacturer warranties on all structural and board systems."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "SHARE YOUR REQUIREMENT",
    description: "Tell us about your project, location and material requirements."
  },
  {
    number: "02",
    title: "GET EXPERT CONSULTATION",
    description: "Our team helps identify suitable solutions."
  },
  {
    number: "03",
    title: "PLAN YOUR MATERIALS",
    description: "Select the right products and materials based on your project."
  },
  {
    number: "04",
    title: "BUILD & EXECUTE",
    description: "Move forward with your project using RAVGROUP solutions."
  }
];

export const PROJECT_GALLERY: ProjectItem[] = [
  {
    id: "p1",
    title: "The Whispering Pines Eco Resort",
    category: "PREFAB",
    categoryLabel: "Prefab Resort",
    location: "Manali, Himachal Pradesh",
    scale: "18 Luxury Cottages + Clubhouse",
    materialsUsed: ["Glulam Prefab Frame", "Standing Seam Roof", "Thermo-Ash Cladding"],
    description: "Full turnkey wooden resort delivered in 110 days through harsh sub-zero temperatures with integrated hydronic floor heating.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p2",
    title: "Kumaon Alpine Chalet Estate",
    category: "WOODEN",
    categoryLabel: "Wooden Cottage",
    location: "Mukteshwar, Uttarakhand",
    scale: "4,500 sq.ft Private Estate",
    materialsUsed: ["Spruce Timber Beams", "Natural Pine Decking", "Architectural Shingles"],
    description: "Dual-wing cantilevered wooden chalet with expansive mountain view glass curtain walls and insulated spruce paneling.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p3",
    title: "Solitude Ridge Resort & Spa",
    category: "ROOFING",
    categoryLabel: "Architectural Roofing",
    location: "Wayanad, Kerala",
    scale: "32,000 sq.ft Roof Canopy",
    materialsUsed: ["Concealed Galvalume Seam", "Heavy Duty Vapor Membrane", "Dark Anthracite Coating"],
    description: "Tropical monsoon-resistant engineered roofing system designed to handle over 3,000mm of annual rainfall with zero ingress.",
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p4",
    title: "The Horizon Corporate Headquarters",
    category: "CLADDING",
    categoryLabel: "Modern Cladding",
    location: "Gurugram, NCR",
    scale: "14,000 sq.ft Exterior Facade",
    materialsUsed: ["Thermo-Wood Louvers", "Ventilated Rainscreen HPL", "Sub-Frame Aluminum"],
    description: "Dynamic sun-shading wooden vertical louvers integrated into glass curtain facade, reducing solar heat gain by 32%.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p5",
    title: "Aura Boutique Hotel & Banquet",
    category: "INTERIORS",
    categoryLabel: "Ceiling & Flooring",
    location: "Jaipur, Rajasthan",
    scale: "8,000 sq.ft Lobby & Suites",
    materialsUsed: ["Acoustic Linear Ceiling Slats", "Engineered European Oak", "BWP Calibrated Ply"],
    description: "Luxury acoustic timber ceilings with recessed track lighting paired with wide-plank oiled hardwood flooring in guest suites.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p6",
    title: "Tea Valley Plantation Cabins",
    category: "WOODEN",
    categoryLabel: "Prefab Cabins",
    location: "Munnar, Kerala",
    scale: "12 Elevated Cabins",
    materialsUsed: ["Pre-cut Cedar Timber", "WPC Veranda Decking", "Thermal Roof Insulation"],
    description: "Lightweight stilt-mounted wooden cabins preserving the natural tea bush terrain with fast on-site crane-free erection.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p7",
    title: "Dhauladhar View Prefab Retreat",
    category: "PREFAB",
    categoryLabel: "Prefab Resort",
    location: "Dharamshala, Himachal Pradesh",
    scale: "10 Panoramic Wooden Pods",
    materialsUsed: ["Factory Modular Sips", "Architectural Glass", "Treated Pine Decks"],
    description: "High-altitude modular glamping resort engineered for seismic Zone V with rapid dry-construction techniques.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p8",
    title: "Ganga Valley Sanctuary Villa",
    category: "INTERIORS",
    categoryLabel: "Hardwood & Ply",
    location: "Rishikesh, Uttarakhand",
    scale: "6,200 sq.ft Riverfront Villa",
    materialsUsed: ["Engineered Oak Planks", "BWP Marine Ply Millwork", "Teak Slatted Dividers"],
    description: "Seamless indoor-outdoor riverside sanctuary featuring custom marine-ply cabinetry and continuous hardwood flooring.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p9",
    title: "The Alibaug Coastal Villa",
    category: "CLADDING",
    categoryLabel: "Exterior Cladding",
    location: "Alibaug, Maharashtra",
    scale: "7,500 sq.ft Coastal Retreat",
    materialsUsed: ["Saline-Resistant Thermo-Pine", "Zinc Flashing", "Composite Wall Panels"],
    description: "Saline climate-resistant exterior timber rainscreen facade paired with modern architectural stone accents.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "p10",
    title: "Nilgiri Highlands Clubhouse",
    category: "ROOFING",
    categoryLabel: "Architectural Roofing",
    location: "Ooty, Tamil Nadu",
    scale: "16,000 sq.ft Gabled Roof",
    materialsUsed: ["Double-Lock Standing Seam", "Thermal Acoustic Insulation", "Snow Guards"],
    description: "Heritage-inspired contemporary gabled metal roof structure offering robust weather protection in high-wind conditions.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85"
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "roofing",
    name: "ROOFING",
    code: "RF-01",
    tagline: "Architectural Weather Armor",
    description: "High-performance residential, resort and industrial roofing systems engineered for extreme weather conditions, high wind speeds, and aesthetic distinction.",
    keyProducts: [
      { name: "Standing Seam Galvalume", specs: "0.50mm - 0.70mm AZ150, concealed lock" },
      { name: "Architectural Asphalt Shingles", specs: "Dual-layer laminated, Class A fire rating" },
      { name: "PIR / PUF Insulated Sandwich Panels", specs: "50mm - 100mm core, thermal conductivity 0.022 W/mK" },
      { name: "Stone-Coated Metal Tiles", specs: "Natural basalt stone granules, 50-year warranty" }
    ],
    advantages: ["Leak-proof concealed fastener systems", "High thermal insulation", "Acoustic dampening", "Rust & corrosion resistant"],
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ceiling",
    name: "CEILING",
    code: "CL-02",
    tagline: "Acoustic & Architectural Volume",
    description: "Contemporary ceiling systems blending natural timber aesthetics, acoustic clarity, and modular accessibility for high-end hospitality and modern spaces.",
    keyProducts: [
      { name: "Linear Timber Slat Panels", specs: "Solid pine or veneer on black acoustic fleece" },
      { name: "Acoustic Baffle Systems", specs: "Extruded aluminum with timber-grain sublimation" },
      { name: "Micro-Perforated Gypsum Boards", specs: "NRC up to 0.85, moisture-treated core" },
      { name: "Open Cell Grid Ceilings", specs: "Architectural powder-coated aluminum" }
    ],
    advantages: ["Exceptional noise reduction (NRC 0.80+)", "Integrated lighting channels", "Easy plenum access", "Class A flame spread index"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cladding",
    name: "CLADDING",
    code: "CD-03",
    tagline: "High-Performance Exterior Envelopes",
    description: "Engineered timber louvers and composite facade panels that protect structural walls while delivering unmistakable architectural character.",
    keyProducts: [
      { name: "Thermo-Treated Pine & Ash", specs: "215°C steam-treated, Class 1 biological durability" },
      { name: "High Pressure Laminate (HPL)", specs: "6mm - 10mm exterior grade with anti-graffiti film" },
      { name: "Fiber Cement Architectural Panels", specs: "Autoclaved, pre-finished architectural textures" },
      { name: "WPC Exterior Fluted Siding", specs: "60% wood fiber, 40% high-density polymers" }
    ],
    advantages: ["Zero rot or insect degradation", "Rear-ventilated moisture evacuation", "Fade-proof UV pigments", "Architectural concealed clips"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "flooring",
    name: "FLOORING",
    code: "FL-04",
    tagline: "Natural Warmth & High-Traffic Performance",
    description: "Hardwood, composite deck, and rigid core SPC solutions designed for heavy hospitality footfall and outdoor veranda exposure.",
    keyProducts: [
      { name: "Engineered Multi-Layer Hardwood", specs: "14mm thickness, 3mm European Oak wear layer" },
      { name: "WPC Co-Extruded Decking", specs: "360-degree protective cap layer, anti-slip R11" },
      { name: "Rigid Core SPC Plank", specs: "5.5mm + 1.5mm IXPE acoustic underlayment" },
      { name: "Solid Plantation Teak", specs: "Kiln-dried, tongue and groove profile" }
    ],
    advantages: ["100% waterproof options for wet areas", "Dent and scratch resistant", "Direct glue or floating click system", "Rich natural wood grain textures"],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ply-boards",
    name: "PLY & BOARDS",
    code: "PB-05",
    tagline: "Calibrated Core & Precision Millwork",
    description: "Dimensionally stable, boil-waterproof (BWP) and high-density boards for structural framing, bespoke furniture, and architectural interiors.",
    keyProducts: [
      { name: "Calibrated Marine Ply (IS:710)", specs: "100% gurjan / eucalyptus core, quad-press calibrated" },
      { name: "HDHMR Boards", specs: "Density > 850 kg/m³, high moisture resistance" },
      { name: "Commercial MR Grade Plywood (IS:303)", specs: "Zero-gap core veneer composition" },
      { name: "Fire Retardant Plywood (IS:5509)", specs: "Treated with fire-resistant borate chemicals" }
    ],
    advantages: ["Uniform thickness across whole sheet", "No internal core gaps or warping", "Smooth surface for veneer & laminate", "Borer and termite proof"],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80"
  }
];
