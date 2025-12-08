import { ChevronLeft, ChevronRight } from "lucide-react";
import imgNearLegionWarriors from "figma:asset/4b64abfcdcc767aa48202c5be1ddf3a99d87d512.png";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#012216] to-[#00ec97] overflow-hidden">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 z-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2">
              <p className="text-sm tracking-wide uppercase">New Collection</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              NEAR LEGION
              <br />
              COLLECTION
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              Exclusive merchandise celebrating the NEAR Protocol community
            </p>
            <button className="bg-white text-black px-8 py-3 hover:bg-white/90 transition-colors">
              Shop Collection
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[400px]">
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-end gap-6 mt-8">
          <button className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="Previous">
            <ChevronLeft className="size-5 text-white" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="Next">
            <ChevronRight className="size-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}