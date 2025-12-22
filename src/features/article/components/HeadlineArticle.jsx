import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "../../../lib/motion";

export default function HeadlineArticle({ article }) {
  if (!article) return null;

  return (
    <RevealOnScroll>
    <Link to={`/artikel/${article.slug}`} className="group block mb-10">
      <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col">
          <div className="relative aspect-[21/7] max-h-[350px] overflow-hidden">
            <img
              src={article.gambar_url}
              alt={article.judul}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Konten dengan padding yang lebih rapat */}
          <div className="p-6 md:p-8">
            <div className="text-[11px] font-medium text-gray-400 mb-2 uppercase tracking-wider">
              ADAKOM Naik Kelas | {new Date(article.tanggal_terbit).toLocaleDateString("id-ID", { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            
            {/* Ukuran font diturunkan ke text-2xl agar tidak terlalu raksasa */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#002d57] mb-3 leading-tight group-hover:text-primary transition-colors">
              {article.judul}
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 max-w-4xl">
              {article.excerpt}
            </p>
            <div className="mt-5">   
            <Link to={`/artikel/${article.slug}`} className="text-primary font-medium text-sm hover:underline">
              Baca Selengkapnya <ArrowRight size={14} className="inline-block ml-1" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </RevealOnScroll>
  );
}