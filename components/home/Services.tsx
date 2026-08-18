import ServiceCard from "./ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import {
  Wrench,
  Zap,
  DoorOpen,
  Settings,
  Lock,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Garage Door Repair",
    href: "/repair/",
    description:
      "Is your garage door broken, stuck, or making strange noises? Our experienced technicians diagnose and repair all makes and models — same day throughout Glen Cove and Glen Head.",
    items: [
      "Broken cable & off-track repair",
      "Panel replacement",
      "Roller & hinge service",
      "All major brands",
    ],
  },
  {
    icon: Settings,
    title: "Garage Door Springs",
    href: "/repair/",
    description:
      "Broken springs are one of the most common garage door emergencies. We repair and replace torsion, extension, and high-cycle springs of all sizes. Starting from $165.",
    items: [
      "Torsion spring repair",
      "Extension spring repair",
      "High-cycle springs",
      "All spring sizes",
    ],
  },
  {
    icon: Zap,
    title: "Garage Door Openers",
    href: "/garage-door-opener/",
    description:
      "LiftMaster belt drive for quiet attached garages, wall-mount for low-ceiling capes, battery backup for North Shore storm season. Gear & sprocket from $130.",
    items: [
      "LiftMaster & Genie service",
      "Belt drive conversions",
      "Gear & sprocket repair",
      "MyQ smart setup",
    ],
  },
  {
    icon: DoorOpen,
    title: "Garage Door Installation",
    href: "/installation/",
    description:
      "Clopay, Amarr & Wayne Dalton carriage house, insulated steel, and glass & aluminum door installation. Free in-home estimate. $250 off with code NEWDOOR250.",
    items: [
      "Carriage house doors",
      "Insulated triple-layer steel",
      "Galvanized coastal hardware",
      "Custom & oversize doors",
    ],
  },
  {
    icon: Lock,
    title: "Garage Door Locks",
    description:
      "We sell, repair, and replace both electric and mechanical garage door locks. Whether your lock is damaged or you need an upgrade for better security, our team handles all types.",
    items: [
      "Electric locks",
      "Mechanical locks",
      "Lock repair",
      "Lock replacement",
    ],
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description:
      "We serve both residential homeowners and commercial businesses throughout Glen Cove, Glen Head, Sea Cliff, and Nassau County North Shore — with the same professional standard.",
    items: [
      "Home garage service",
      "Commercial service",
      "Same-day availability",
      "Emergency response",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f5f5f5]">
      <Container>
        <div className="mb-12">
          <SectionHeading
            title="Our Garage Door Services"
            subtitle="Professional repairs, installation, and emergency service for residential and commercial customers throughout Glen Cove, Glen Head, and Nassau County North Shore."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
