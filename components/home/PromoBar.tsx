export default function PromoBar() {
  return (
    <div className="bg-[#ff7a00] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-white font-black text-xl md:text-2xl tracking-tight">
          🔧 5 Active Coupons — Save Up to $250!
        </p>
        <a
          href="/faq/"
          className="inline-flex items-center bg-white text-[#ff7a00] font-bold text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
        >
          View All Coupons
        </a>
      </div>
    </div>
  );
}
