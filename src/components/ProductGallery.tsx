import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-sm bg-sand/30">
        <img
          src={images[active]}
          alt={`${name} — image ${active + 1}`}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-sm border-2 transition-colors ${
                i === active ? "border-terracotta" : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                className="h-20 w-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
