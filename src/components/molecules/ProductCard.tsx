import { StaticImageData } from "next/image";
import Images from "../atoms/Image";

interface Props {
  image: StaticImageData;
  titel: string;
  type: string;
  inventory: string;
  color: string;
  price: string;
  rating: string;
}
export default function ProductCard({
  image,
  titel,
  type,
  inventory,
  color,
  price,
  rating,
}: Props) {
  const InventoryStyle = (status: string) => {
    switch (status) {
      case "Out of Stock":
        return "bg-gray-100 text-gray-600";
      default:
        return "";
    }
  };
  return (
    <tr className="ds-text-primary border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="w-2/6 p-3 ">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />
          <div className="flex gap-4">
            <Images src={image} alt="Product" width={60} height={15} />
            <div className="flex flex-col gap-1">
              <span>{titel}</span>
              <span className="ds-text-disabled">{type}</span>
            </div>
          </div>
        </div>
      </td>

      <td className="w-1/6 p-3">
        <span
          className={`font-medium px-2.5 py-1.5 rounded-sm ${InventoryStyle(
            inventory,
          )}`}
        >
          {inventory}
        </span>
      </td>

      <td className="w-1/6 p-3">{color}</td>

      <td className="w-1/6 p-3">{price}</td>

      <td className="w-1/6 p-3">{rating}</td>
    </tr>
  );
}
