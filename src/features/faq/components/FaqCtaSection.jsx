import Button from "../../../components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function FaqCtaSection() {
  return (
    <section className="py-16 border-t border-yellow-100 text-center">
      <div className="container mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Masih Butuh Bantuan?
        </h2>

        <p className="text-gray-700 mt-3 max-w-5xl mx-auto">
          Tim ADAKOM siap membantu menjawab pertanyaan yang belum terjawab.
        </p>

        <Button
          variant="primary"
          size="lg"
          target="_blank"
          href="https://wa.me/6282345600777"
          className="mt-6 inline-flex items-center gap-2"
        >
          Hubungi Admin
          <ArrowRight size={18} />
        </Button>

      </div>
    </section>
  );
}
