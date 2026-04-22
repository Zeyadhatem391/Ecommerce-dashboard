import { StaticImageData } from "next/image";
import Images from "@/components/atoms/Image";
import { Pencil } from "@/assets/icons/icons";
import Titel from "../atoms/Titel";
import Text from "../atoms/Text";

interface Props {
  image: StaticImageData;
  titel: string;
  numberItems: number;
}

export default function CategoryCard({ image, titel, numberItems }: Props) {
  return (
    <div className="rounded-md overflow-hidden ds-bg-alt shadow-sm">
      <div className="relative w-full h-56 group overflow-hidden">
        <Images
          src={image}
          alt={titel}
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
        <Titel variant="primary" size="lg" className="font-semibold">
          {titel}
        </Titel>
        <Text variant="disabled">{numberItems} items</Text>
      </div>
    </div>
  );
}
