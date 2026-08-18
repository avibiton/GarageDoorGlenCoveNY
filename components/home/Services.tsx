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
    description:
      "Is your garage door broken, stuck, or making strange noises? Our experienced technicians diagnose and repair all makes and models. We service all major garage door brands and provide on-the-spot repairs whenever possible.",
    items: [
      "Broken door repair",
      "Panel replacement",
      "Cable & track repair",
      "All major brands",
    ],
  },
  {
    icon: Settings,
    title: "Garage Door Springs",
    description:
      "Garage door springs are one of the most critical components of your door system. Broken springs prevent your door from operating safely. We repair and replace springs of all sizes and types — torsion and extension.",
    items: [
      "Torsion spring repair",
      "Extension spring repair",
      "Spring replacement",
      "All spring sizes",
    ],
  },
  {
    icon: Zap,
    title: "Garage Door Openers",
    description:
      "We have extensive experience repairing and replacing garage door openers. From older broken models to new electric openers, we sell, repair, and install openers to keep your garage secure and convenient.",
    items: [
      "Opener repair",
      "New opener installation",
      "Electric opener service",
      "Remote programming",
    ],
  },
  {
    icon: DoorOpen,
    title: "Garage Door Installation",
    description:
      "A garage door is the largest moving object in your home. Proper installation is critical for safety and performance. Our skilled technicians handle every step — from measuring to final installation — safely and professionally.",
    items: [
      "Residential installation",
      "Commercial installation",
      "Custom sizing",
      "Spring system setup",
    ],
  },
  {
    icon: Lock,
    title: "Garage Door Locks",
    description:
      "We sell, repair, and replace both electric and mechanical garage door locks. Whether your lock is damaged or you need an upgrade for better security, our team handles all types of locking systems.",
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
      "We serve both residential homeowners and commercial businesses throughout the Glen Cove area. From a single-family home garage to a commercial loading bay, our team delivers the same professional standard of service.",
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
            subtitle="Professional repairs, installation, and emergency service for residential and commercial customers throughout Glen Cove and Long Island."
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
