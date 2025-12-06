import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, image, urlCta, ctaText }) {
  return (
    <div className="rounded-md shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-200">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-secondary mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <a
          href={urlCta}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-secondary font-medium hover:brightness-110 transition-all"
        >
          {ctaText}
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
