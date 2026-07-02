import { Product1 } from "@/assets/images/images";
import { categories } from "@/modules/categories/data/Categories";
import Images from "@/shared/components/atoms/Image";
import { StaticImageData } from "next/image";

interface Props {
  // id: string;
  // image: StaticImageData;
  // name: string;
  // categoryId: string[];
  // inventory: string;
  // color: string;
  // price: string;
  // rating: string;
  // checked: boolean;
  // onSelect: (id: string) => void;
}

export default function ProductCard(
  {
    // id,
    // image,
    // name,
    // categoryId,
    // inventory,
    // color,
    // price,
    // rating,
    // checked,
    // onSelect,
  }: Props,
) {
  // const getInventoryClass = (inventory: string) => {
  //   return inventory === "0" || inventory === ""
  //     ? "bg-gray-100 text-gray-600"
  //     : "";
  // };

  // const getInventoryText = (inventory: string) => {
  //   return inventory === "0" || inventory === ""
  //     ? "Out of Stock"
  //     : `${inventory} in Stock`;
  // };

  // const categoryNames = categories
  //   .filter((category) => categoryId.includes(category.id))
  //   .map((category) => category.title)
  //   .join(", ");

  return (
    // <tr className="ds-text-primary border-b border-gray-100 transition hover:bg-gray-50">
    //   <td className="w-2/6 p-3">
    //     <div className="flex items-center gap-3">
    //       <input
    //         type="checkbox"
    //         checked={checked}
    //         onChange={() => onSelect(id)}
    //         className="h-4 w-4 cursor-pointer"
    //       />

    //       <div className="flex gap-4">
    //         <Images src={image} alt="Product" width={60} height={60} />

    //         <div className="flex flex-col gap-1">
    //           <span>{name}</span>

    //           <span className="ds-text-disabled text-sm">
    //             {categoryNames || "No Category"}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </td>

    //   <td className="w-1/6 p-3">
    //     <span
    //       className={`rounded-sm px-2.5 py-1.5 font-medium ${getInventoryClass(
    //         inventory,
    //       )}`}
    //     >
    //       {getInventoryText(inventory)}
    //     </span>
    //   </td>

    //   <td className="w-1/6 p-3">{color}</td>

    //   <td className="w-1/6 p-3">${price}</td>

    //   <td className="w-1/6 p-3">{rating}</td>
    // </tr>

    <tr className="ds-text-primary border-b border-gray-100 transition hover:bg-gray-50">
      <td className="w-2/6 p-3">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 cursor-pointer" />

          <div className="flex gap-4">
            <Images src={Product1} alt="Product" width={60} height={60} />

            <div className="flex flex-col gap-1">
              <span>Men Grey Hoodie</span>

              <span className="ds-text-disabled text-sm">Casual Clothes</span>
            </div>
          </div>
        </div>
      </td>

      <td className="w-1/6 p-3">
        <span className="rounded-sm px-2.5 py-1.5 font-medium ">96</span>
      </td>

      <td className="w-1/6 p-3">black</td>

      <td className="w-1/6 p-3">$100</td>

      <td className="w-1/6 p-3">4.9</td>
    </tr>
  );
}
