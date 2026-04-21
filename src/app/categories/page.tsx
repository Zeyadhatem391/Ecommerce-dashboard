import { Product1 } from "@/assets/images/images";
import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";
import Image from "next/image";
import { Pencil } from "lucide-react";

const categories = [
  {
    id: "1",
    titel: "Men Clothes",
    image: Product1,
    numberItems: 24,
  },
  {
    id: "2",
    titel: "Women Clothes",
    image: Product1,
    numberItems: 65,
  },
  {
    id: "3",
    titel: "Accessories",
    image: Product1,
    numberItems: 143,
  },
  {
    id: "4",
    titel: "Cotton Clothes",
    image: Product1,
    numberItems: 9,
  },
  {
    id: "5",
    titel: "Summer Clothes",
    image: Product1,
    numberItems: 33,
  },
  {
    id: "6",
    titel: "Wedding Clothes",
    image: Product1,
    numberItems: 21,
  },
  {
    id: "7",
    titel: "Spring Collection",
    image: Product1,
    numberItems: 52,
  },
  {
    id: "8",
    titel: "Casual Clothes",
    image: Product1,
    numberItems: 44,
  },
  {
    id: "9",
    titel: "Hats",
    image: Product1,
    numberItems: 25,
  },
];

export default function CategoriesPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Categories" />

      <div className="grid grid-cols-3 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="rounded-ةي overflow-hidden ds-bg-alt shadow-sm"
          >
            <div className="relative w-full h-56 group overflow-hidden">
              <Image
                src={item.image}
                alt={item.titel}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-gray-100 transition">
                  <Pencil size={16} />
                  Edit
                </button>
              </div>
            </div>

            <div className="flex flex-col px-6 py-4">
              <span className="font-semibold">{item.titel}</span>
              <span className="ds-text-disabled">{item.numberItems} items</span>
            </div>
          </div>
        ))}
      </div>
    </DashbordLayout>
  );
}
