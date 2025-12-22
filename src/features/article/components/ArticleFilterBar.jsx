import { Search } from "lucide-react";

export default function ArticleFilterBar({ search, setSearch }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border px-4 py-3 flex items-center gap-3">
      <Search size={18} className="text-gray-400" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari artikel..."
        className="w-full bg-transparent outline-none text-sm text-gray-700"
      />
    </div>
  );
}
