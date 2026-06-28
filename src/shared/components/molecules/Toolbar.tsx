import { Pencil, Trash2 } from "@/assets/icons/icons";
interface Props {
  onDelete?: () => void;
  selectedCount?: number;
}

export default function Toolbar({ onDelete, selectedCount }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3 w-full max-w-lg">
        <input
          type="text"
          placeholder="Filter"
          className="w-1/3 px-3 py-2  border border-gray-300 rounded-b-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-2/3 px-3 py-2  border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
          <Pencil size={18} />
        </button>

        <button
          onClick={onDelete}
          disabled={selectedCount === 0}
          className="p-2 rounded-md border border-gray-300
             hover:bg-red-50 text-red-500 transition
             disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
