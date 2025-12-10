import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, image, urlCta, ctaText }) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200">
      
      {/* GAMBAR LEBIH TINGGI */}
      <div className="w-full h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 md:p-5 flex flex-col h-full">

        <h3 className="text-lg md:text-xl font-semibold text-secondary leading-snug mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <a
          href={urlCta}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 justify-between bg-primary px-4 py-2.5 rounded-lg text-secondary font-medium hover:brightness-110 transition-all w-full"
        >
          <span>{ctaText}</span>
          <ArrowRight size={18} />
        </a>

      </div>
    </div>
  );
}

