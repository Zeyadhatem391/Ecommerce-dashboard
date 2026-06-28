import Titel from "@/shared/components/atoms/Titel";
import Link from "next/link";
import CardsCategory from "../molecules/CardsCategory";
// import { categories } from "../../data/Categories";

export default function LeftAddCategoy({ id }: { id?: string }) {
  return (
    <div className="lg:col-span-2 ds-bg-alt rounded-xl p-6 shadow-sm">
      <Titel size="lg" className="mb-5 font-semibold">
        Products
      </Titel>

      <CardsCategory id={id}/>

      <Link
        href="/products/add-product"
        className="mt-6 block w-full rounded-lg border border-dashed border-gray-300 py-3 text-center text-blue-700 transition hover:bg-gray-100 cursor-pointer"
      >
        + Add Product
      </Link>
    </div>
  );
}
