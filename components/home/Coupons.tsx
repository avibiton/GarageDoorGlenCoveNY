import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import CouponCard from "./CouponCard";
import { COUPONS } from "@/lib/constants";

export default function Coupons() {
  return (
    <section id="coupons" className="py-20 bg-[#f5f5f5]">
      <Container>
        <div className="mb-12">
          <SectionHeading
            title="Special Offers & Coupons"
            subtitle="5 active discount codes for Glen Cove, Glen Head, and Nassau County North Shore. Mention your code when you call — no printing required."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {COUPONS.map((c) => (
            <CouponCard key={c.code} {...c} />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          One coupon per service · Not valid with other offers ·{" "}
          <a href="/faq/" className="text-[#155b91] font-semibold hover:underline">
            View full FAQ & pricing →
          </a>
        </p>
      </Container>
    </section>
  );
}
