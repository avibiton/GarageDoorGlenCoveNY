import { BUSINESS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoSection() {
  const videoId = BUSINESS.youtubeVideoId;

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-10">
          <SectionHeading
            title="See Our Work"
            subtitle="Watch our team in action — professional garage door service for the Glen Cove area."
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#171717]">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=${videoId}`}
              title="Garage Doors Glen Cove NY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
