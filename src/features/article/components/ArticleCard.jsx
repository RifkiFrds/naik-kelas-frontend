import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ArticleCard({ article }) {
  return (
    <article className="group flex flex-col">
      {/* Container Gambar */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
        <img
          src={article.gambar_url}
          alt={article.judul}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col flex-grow">
        <div className="text-[12px] font-medium text-gray-400 mb-2 uppercase tracking-wide">
          ADAKOM Naik Kelas | {new Date(article.tanggal_terbit).toLocaleDateString("id-ID", { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </div>
        
        <h3 className="text-lg md:text-2xl font-bold text-[#002d57] leading-tight mb-3 group-hover:text-primary transition-colors">
          <Link to={`/artikel/${article.slug}`}>
            {article.judul}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>

        <div className="mt-auto">   
            <Link to={`/artikel/${article.slug}`} className="text-primary font-medium text-sm hover:underline">
              Baca Selengkapnya <ArrowRight size={14} className="inline-block ml-1" />
            </Link>
        </div>
      </div>
    </article>
  );
}