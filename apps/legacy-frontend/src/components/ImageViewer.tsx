import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  productName: string;
}

export function ImageViewer({
  images,
  initialIndex,
  onClose,
  productName,
}: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[838px] mx-4">
        <div className="relative flex items-center justify-center gap-6">
          {/* Left Arrow - Outside */}
          <button
            onClick={handlePrevious}
            className="size-12 bg-white/90 flex items-center justify-center hover:bg-white transition-colors shrink-0"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Image Container */}
          <div className="relative bg-[#ececf0] aspect-square overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] max-w-[678px] w-full">
            <img
              src={images[currentIndex]}
              alt={`${productName} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 size-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close image viewer"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Right Arrow - Outside */}
          <button
            onClick={handleNext}
            className="size-12 bg-white/90 flex items-center justify-center hover:bg-white transition-colors shrink-0"
            aria-label="Next image"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        {/* Counter - Outside Below */}
        <div className="flex justify-center mt-6">
          <div className="bg-white/90 px-3.5 py-2 rounded-full">
            <span className="tracking-[-0.48px] text-[14px]">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}