// article/views/ArticleDetailView.jsx
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Share2, ArrowLeft, Check } from "lucide-react"; 
import { useState } from "react"; // Tambahkan untuk state copy link
import { useArticleDetail } from "../hooks/useArticleDetail";
import { RevealOnScroll } from "../../../lib/motion";
import ServiceBanner from "../../../components/ServiceBanner";

export default function ArticleDetailView() {
  const { slug } = useParams();
  const { article, loading } = useArticleDetail(slug);
  const [copied, setCopied] = useState(false);

  // FUNGSI BAGIKAN (Web Share API)
  const handleShare = async () => {
    const shareData = {
      title: article?.judul,
      text: article?.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard jika browser tidak support Web Share
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <div className="animate-pulse">Memuat artikel...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-gray-400">
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <section className="min-h-screen pb-20">
      {/* 1. Header & Judul */}
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/artikel" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Kembali ke Artikel
          </Link>

          {/* Label Brand */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
              ADAKOM | NAIK KELAS
            </span>
          </div>

          {/* Headline - Margin & Line Height ditingkatkan */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#002d57] leading-[1.1] mb-8">
            {article.judul}
          </h1>

          {/* Meta Data - Lebih Compact & Fungsional */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6 mb-12">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-secondary">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter">Penulis</p>
                  <p className="text-sm font-bold text-secondary text-gray-900">Admin Adakom</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400 uppercase tracking-tighter">Diterbitkan</p>
                <p className="text-sm font-semibold text-secondary">
                  {new Date(article.tanggal_terbit).toLocaleDateString("id-ID", {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            {/* Tombol Bagikan Fungsional */}
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm font-bold text-secondary hover:bg-primary hover:text-secondary transition-all active:scale-95 border border-gray-100"
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              {copied ? "Link Tersalin" : "Bagikan Artikel"}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Image - Aspect Ratio Modern */}
      <div className="max-w-5xl mx-auto px-0 md:px-6 mb-16">
        {article.gambar_url && (
          <div className="relative aspect-[21/9] md:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/5">
            <img
              src={article.gambar_url}
              alt={article.judul}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* 3. Area Konten */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="
              prose prose-lg md:prose-xl max-w-none
              prose-headings:text-[#002d57] prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
              prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-8
              prose-strong:text-secondary
              prose-img:rounded-3xl prose-img:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:rounded-xl prose-blockquote:not-italic prose-blockquote:font-medium
              whitespace-pre-wrap break-words
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Elegant CTA Section */}
          {article.url_cta && (
            <div className="mt-20 p-10 bg-[#002d57] rounded-[2rem] text-center text-white relative overflow-hidden group">
              {/* Dekorasi Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              
              <h4 className="text-2xl font-bold mb-4 relative z-10">Tertarik belajar lebih lanjut?</h4>
              <p className="text-gray-300 mb-8 max-w-md mx-auto relative z-10">Dapatkan insight mendalam dan bimbingan langsung bersama para ahli di ADAKOM.</p>
              
              <a
                href={article.url_cta}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-primary text-secondary font-extrabold
                  px-10 py-4 rounded-2xl
                  hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-xl shadow-primary/10
                  relative z-10
                "
              >
                Daftar Sekarang
                <ArrowLeft size={20} className="rotate-180" />
              </a>
            </div>
          )}
        </div>

        {/* Banner Layanan */}
        <div className="mt-32 max-w-5xl text-center mx-auto">
          <RevealOnScroll direction="up">
            <ServiceBanner />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}