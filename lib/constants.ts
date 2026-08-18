export const BUSINESS = {
  name: "Garage Doors Glen Cove NY",
  phone: "516-629-7162",
  phoneHref: "+15166297162",
  street: "1007 Glen Cove Ave",
  city: "Glen Head",
  state: "NY",
  zip: "11545",
  dba: "Fast Local Service",
  siteUrl: "https://garagedoorsglencoveny.com",
  youtubeVideoId: "R9vg8MeiwxM",
};

export const SERVICE_AREAS = [
  { name: "Glen Cove", zip: "11542" },
  { name: "Glen Head", zip: "11545" },
  { name: "Sea Cliff", zip: "11579" },
  { name: "Old Brookville", zip: "" },
  { name: "Roslyn Heights", zip: "11577" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Repair", href: "/repair/" },
  { label: "Openers", href: "/garage-door-opener/" },
  { label: "Installation", href: "/installation/" },
  { label: "FAQ & Coupons", href: "/faq/" },
  { label: "Contact", href: "/#contact" },
];

export const COUPONS = [
  {
    discount: "10% OFF",
    service: "Spring Replacement",
    subtitle: "Torsion · Extension · High-Cycle",
    description: "10% off torsion, extension, or high-cycle spring replacement.",
    code: "SPRING10",
    expiry: "Exp. 12/31/2026",
    accent: "orange" as const,
  },
  {
    discount: "$250 OFF",
    service: "New Door Installation",
    subtitle: "Clopay · Amarr · Wayne Dalton",
    description: "$250 off any new garage door installation. Free in-home estimate.",
    code: "NEWDOOR250",
    expiry: "Exp. 12/31/2026",
    accent: "blue" as const,
  },
  {
    discount: "$99 OFF",
    service: "New Opener Installation",
    subtitle: "LiftMaster or Genie · MyQ · Battery Backup",
    description: "$99 off any new LiftMaster or Genie opener installation.",
    code: "OPENER99",
    expiry: "Exp. 12/31/2026",
    accent: "orange" as const,
  },
  {
    discount: "$20 OFF",
    service: "Annual Tune-Up",
    subtitle: "22-Point Safety Inspection",
    description: "$20 off our 22-point garage door safety inspection and tune-up.",
    code: "TUNEUP20",
    expiry: "Exp. 12/31/2026",
    accent: "blue" as const,
  },
  {
    discount: "FREE",
    service: "Service Call",
    subtitle: "With Any Repair · 24/7",
    description: "Free service call with any repair. No extra charge, any time.",
    code: "FREE911",
    expiry: "Exp. 12/31/2026",
    accent: "orange" as const,
  },
];

export const REPAIR_PRICING = [
  { service: "Torsion Spring Replacement", price: "$295", note: "Starting at" },
  { service: "Extension Spring (Pair + Safety Cables)", price: "$165", note: "Starting at" },
  { service: "Broken Overhead Cable Repair", price: "$125", note: "Starting at" },
  { service: "Cable Drum Replacement", price: "$145", note: "Starting at" },
  { service: "Off-Track Repair", price: "$85", note: "Starting at" },
  { service: "Nylon Roller Upgrade (per roller)", price: "$35", note: "" },
  { service: "Bottom Seal Replacement", price: "$65", note: "Starting at" },
  { service: "Safety Sensor Repair / Replace", price: "$75–$150", note: "" },
  { service: "22-Point Tune-Up", price: "$99", note: "" },
  { service: "Free Written Estimate", price: "FREE", note: "" },
];

export const OPENER_PRICING = [
  { service: "Gear & Sprocket Kit Replacement", price: "$130", note: "Starting at" },
  { service: "Safety Sensor Repair / Replace", price: "$75–$150", note: "" },
  { service: "Remote / Keypad Programming", price: "$45", note: "" },
  { service: "Logic Board Replacement", price: "$85", note: "" },
  { service: "Battery Backup Add-On", price: "$195", note: "" },
  { service: "LiftMaster Belt Drive (87504)", price: "Call", note: "" },
  { service: "LiftMaster Wall-Mount (8500W)", price: "Call", note: "" },
  { service: "Free Written Estimate", price: "FREE", note: "" },
];

export const INSTALLATION_PRICING = [
  { service: "Single Insulated Steel", price: "$650", note: "Starting at", lead: "Same / Next Day" },
  { service: "Double Insulated Steel", price: "$950", note: "Starting at", lead: "Same / Next Day" },
  { service: "Carriage House Composite Overlay", price: "$1,200", note: "Starting at", lead: "Typical 1–3 Days" },
  { service: "Glass & Aluminum Contemporary", price: "$1,800", note: "Starting at", lead: "Typical 2–4 Weeks" },
  { service: "Custom Estate / Oversize", price: "Call", note: "", lead: "Typical 2–4 Weeks" },
  { service: "Free In-Home Estimate", price: "FREE", note: "", lead: "—" },
];
