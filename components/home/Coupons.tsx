import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import CouponCard from "./CouponCard";

const coupons = [
  {
    discount: "10%",
    service: "Garage Door Repair",
    description: "Save 10% on any garage door repair service.",
    accent: "orange" as const,
  },
  {
    discount: "$20",
    service: "Spring Repair",
    description: "$20 off garage door spring repair or replacement.",
    accent: "blue" as const,
  },
  {
    discount: "$75",
    service: "New Door Installation",
    description: "$75 off any new garage door installation.",
    accent: "orange" as const,
  },
];

export default function Coupons() {
  return (
    <section id="coupons" className="py-20 bg-[#f5f5f5]">
      <Container>
        <div className="mb-12">
          <SectionHeading
            title="Special Offers & Coupons"
            subtitle="Exclusive savings for our website customers. Call to redeem — no printing required."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coupons.map((c) => (
            <CouponCard key={c.service} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
