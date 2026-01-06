import HeroSection from "../components/HeroSection";
import ArticleFilterBar from "../components/ArticleFilterBar";
import ArticleCard from "../components/ArticleCard";
import HeadlineArticle from "../components/HeadlineArticle";
import { useArticles } from "../hooks/useArticles";
import Button  from "../../../components/ui/Button";

export default function ArticleListView() {
  const { articles, loading, search, setSearch, hasMore, loadMore } = useArticles(); //

  const showHeadline = !search && articles.length > 0;
  const headlineData = showHeadline ? articles[0] : null;
  const displayArticles = showHeadline ? articles.slice(1) : articles;

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* margin samping kanan*/}
      <section className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 pb-20">
        <ArticleFilterBar search={search} setSearch={setSearch} /> {/* */}

        {loading ? (
          <div className="mt-20 text-center text-gray-400">Memuat artikel...</div>
        ) : (
          <div className="mt-12">
            {/* Headline Section */}
            {showHeadline && <HeadlineArticle article={headlineData} />}

            {/* Grid Artikel Reguler */}
            <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-16">
              {displayArticles.length ? (
                displayArticles.map((item) => (
                  <ArticleCard key={item.id} article={item} />
                ))
              ) : (
                console.log('No articles found')
              )}
            </div>
          </div>
        )}

        {hasMore && (
          <div className="mt-20 text-center">
            <Button
              onClick={loadMore}
              className="px-8 py-2 text-gray-600 text-sm font-medium  transition"
            >
              Muat lebih banyak
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}