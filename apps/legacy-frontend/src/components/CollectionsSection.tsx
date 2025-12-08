import { ArrowRight } from "lucide-react";
import imgMen from "figma:asset/8b83c6986dd3ffd55dc4f73c18f55e152452f668.png";
import imgWomen from "figma:asset/fd32da6d955919681e059a5194a228ec74fb5883.png";
import imgLegion from "figma:asset/2fbfb75c2ecff6ae9bc21cbfc402f184a20414dc.png";
import imgRandom from "figma:asset/1abbf3e6f5926f53e873d365dc5909350868bab2.png";

const collections = [
  {
    id: "men",
    title: "Men",
    count: "4 Products",
    image: imgMen,
    collectionType: "Men" as const,
  },
  {
    id: "women",
    title: "Women",
    count: "4 Products",
    image: imgWomen,
    collectionType: "Women" as const,
  },
  {
    id: "legion",
    title: "NEAR Legion",
    count: "4 Products",
    image: imgLegion,
    collectionType: "Exclusives" as const,
  },
  {
    id: "sports",
    title: "Accessories",
    count: "7 Products",
    image: imgRandom,
    collectionType: "Accessories" as const,
  },
];

interface CollectionsSectionProps {
  onNavigateToCollections?: () => void;
  onNavigateToDetail?: (collection: "Men" | "Women" | "Exclusives" | "Accessories") => void;
}

export function CollectionsSection({ onNavigateToCollections, onNavigateToDetail }: CollectionsSectionProps) {
  return (
    <section className="py-16 md:py-20 border-b border-[rgba(0,0,0,0.1)]" id="collections">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-neutral-950 mb-4">Shop by Collection</h2>
          <p className="text-[#717182]">
            Explore our curated collections of premium NEAR Protocol merchandise
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <CollectionCard 
              key={collection.id} 
              {...collection} 
              onNavigateToDetail={onNavigateToDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CollectionCardProps {
  title: string;
  count: string;
  image: string;
  collectionType: "Men" | "Women" | "Exclusives" | "Accessories";
  onNavigateToDetail?: (collection: "Men" | "Women" | "Exclusives" | "Accessories") => void;
}

function CollectionCard({ title, count, image, collectionType, onNavigateToDetail }: CollectionCardProps) {
  const handleClick = () => {
    if (onNavigateToDetail) {
      onNavigateToDetail(collectionType);
    }
  };

  return (
    <div 
      className="group relative bg-[#ececf0] overflow-hidden border border-[rgba(0,0,0,0.1)] cursor-pointer h-[400px] md:h-[520px]"
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-4xl mb-2">{title}</h3>
            <p className="text-white/80">{count}</p>
          </div>
          <button 
            className="p-2 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors"
            aria-label={`View ${title} collection`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <ArrowRight className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}