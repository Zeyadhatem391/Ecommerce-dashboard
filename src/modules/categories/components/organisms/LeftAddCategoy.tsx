import Titel from "@/shared/components/atoms/Titel";

export default function LeftAddCategoy() {
  return (
    <div className="lg:col-span-2 ds-bg-alt rounded-xl p-6 shadow-sm">
      <Titel size="lg" className="mb-5 font-semibold">
        Products
      </Titel>

      <button className="mt-6 w-full rounded-lg border border-dashed border-gray-300 py-3 transition hover:bg-gray-100 text-blue-700 cursor-pointer">
        + Add Product
      </button>
    </div>
  );
}
