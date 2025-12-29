import { useParams, Link } from "react-router-dom";
import { Calendar, Lightbulb, Share2, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { useArticleDetail } from "../hooks/useArticleDetail";
import { FadeInUp, RevealOnScroll } from "../../../lib/motion";
import ServiceBanner from "../components/SeviceBanner";
import Button from "../../../components/ui/Button"

export default function ArticleDetailView() {
  const { slug } = useParams();
  const { article, loading } = useArticleDetail(slug);
  const [copied, setCopied] = useState(false);

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
        Artikel tidak ditemukan atau belum dibuat.
      </div>
    );
  }

  return (
    <FadeInUp>
      <section className="min-h-screen pb-20">

        {/* HEADER */}
        <div className="container mx-auto px-4 pt-8 md:pt-16">
          <div className="max-w-4xl mx-auto">

            {/* Back */}
            <Link
              to="/artikel"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition mb-10 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Kembali ke Artikel
            </Link>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002d57] leading-[1.1] mb-8">
              {article.judul}
            </h1>

            {/* META DATA */}
            <RevealOnScroll>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-y border-gray-100 py-6 mb-12">

                {/* Left Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                  {/* Insight */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-secondary">
                      <Lightbulb size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">
                        Insight
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        ADAKOM Naik Kelas
                      </p>
                    </div>
                  </div>

                  {/* Calendar (hidden on small mobile) */}
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-secondary">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">
                        Diterbitkan
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(article.tanggal_terbit).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="
                    w-full sm:w-auto
                    flex items-center justify-center gap-2
                    bg-gray-50 px-4 py-2
                    rounded-full text-sm font-bold
                    text-secondary border border-gray-100
                    hover:bg-primary hover:text-secondary
                    transition-all active:scale-95
                  "
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                  {copied ? "Link Tersalin" : "Bagikan Artikel"}
                </button>

              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-4xl mx-auto px-4 mb-10">
          {article.gambar_url && (
            <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/5">
              <img
                src={article.gambar_url}
                alt={article.judul}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div
              className="
                prose prose-lg md:prose-xl max-w-none
                prose-headings:text-[#002d57]
                prose-headings:font-bold
                prose-p:text-gray-700
                prose-p:leading-[1.8]
                whitespace-pre-wrap break-words
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA */}
            {article.url_cta && (
              <div className="mt-10 bg-secondary p-8 md:p-10 rounded-[2rem] text-center text-gray-100">
                <h4 className="text-2xl font-bold mb-4">
                  Tertarik belajar lebih lanjut?
                </h4>
                <p className="text-gray-300 mb-8">
                  Dapatkan insight dan bimbingan langsung bersama ADAKOM.
                </p>

                <Button
                  href={article.url_cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  rounded="lg"
                  className="inline-flex items-center gap-3 text-secondary px-10 py-4 rounded-2xl hover:scale-105 transition-all"
                >
                  Daftar Sekarang
                  <ArrowLeft size={20} className="rotate-180" />
                </Button>
              </div>
            )}
          </div>

          {/* SERVICE BANNER */}
          <div className="mt-32 max-w-5xl mx-auto">
            <RevealOnScroll direction="up">
              <ServiceBanner />
            </RevealOnScroll>
          </div>
        </div>

      </section>
    </FadeInUp>
  );
}
