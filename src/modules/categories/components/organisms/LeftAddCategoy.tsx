import { WeddingClothes } from "@/assets/images/images";
import { Pencil, Trash2 } from "@/assets/icons/icons";
import Images from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import Link from "next/link";

export default function LeftAddCategoy() {
  return (
    <div className="lg:col-span-2 ds-bg-alt rounded-xl p-6 shadow-sm">
      <Titel size="lg" className="mb-5 font-semibold">
        Products
      </Titel>

      <div className="flex justify-between rounded-xl border bg-white p-4 shadow-md  items-center mb-3">
        <div className="flex gap-5 items-center">
          <div>
            <button className="flex flex-col gap-1">
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            </button>
          </div>

          <div className="relative w-20 h-20 mx-auto">
            <Images
              src={WeddingClothes}
              alt="image"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <Text size="lg" className="text-center font-medium">
            Women Striped T-Shirt
          </Text>
        </div>

        <div className="flex gap-2">
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Pencil size={18} />
          </button>
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-between rounded-xl border bg-white p-4 shadow-md  items-center mb-3">
        <div className="flex gap-5 items-center">
          <div>
            <button className="flex flex-col gap-1">
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            </button>
          </div>

          <div className="relative w-20 h-20 mx-auto">
            <Images
              src={WeddingClothes}
              alt="image"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <Text size="lg" className="text-center font-medium">
            Women Striped T-Shirt
          </Text>
        </div>

        <div className="flex gap-2">
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Pencil size={18} />
          </button>
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-between rounded-xl border bg-white p-4 shadow-md  items-center mb-3">
        <div className="flex gap-5 items-center">
          <div>
            <button className="flex flex-col gap-1">
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            </button>
          </div>

          <div className="relative w-20 h-20 mx-auto">
            <Images
              src={WeddingClothes}
              alt="image"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <Text size="lg" className="text-center font-medium">
            Women Striped T-Shirt
          </Text>
        </div>

        <div className="flex gap-2">
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Pencil size={18} />
          </button>
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <Link
        href="/products/add-product"
        className="mt-6 block w-full rounded-lg border border-dashed border-gray-300 py-3 text-center text-blue-700 transition hover:bg-gray-100 cursor-pointer"
      >
        + Add Product
      </Link>
    </div>
  );
}
