import { Search } from "lucide-react";

export default function SearchKnowledge() {
  return (
    <div className="relative ds-bg-alt">
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        size={22}
      />

      <input
        type="text"
        placeholder="Search..."
        className="h-12 w-full rounded-xl border pl-14 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
