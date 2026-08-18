"use client";

import { useState } from "react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoId = BUSINESS.youtubeVideoId;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

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
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2"
                aria-label="Play video"
              >
                {/* Thumbnail */}
                <Image
                  src={thumbnailUrl}
                  alt="Garage Doors Glen Cove NY video"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 768px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#ff7a00] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                  <span className="text-white font-semibold text-sm drop-shadow">
                    {BUSINESS.name} — {BUSINESS.phone}
                  </span>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Garage Doors Glen Cove NY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
