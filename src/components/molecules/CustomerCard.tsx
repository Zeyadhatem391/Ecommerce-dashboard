import { StaticImageData } from "next/image";
import Images from "../atoms/Image";

interface Props {
  image: StaticImageData;
  name: string;
  location: string;
  orders: number;
  spent: string;
}
export default function CustomerCard({
  image,
  name,
  location,
  orders,
  spent,
}: Props) {
  return (
    <tr className="ds-text-primary border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="w-3/6 p-3 ">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />
          <div className="flex gap-4 items-center">

           <div className="w-10 h-10 flex items-center justify-center rounded-full text-xl bg-gray-400 text-white font-semibold">
              {name?.charAt(0).toUpperCase()}
            </div>

            <span>{name}</span>
          </div>
        </div>
      </td>

      <td className="w-2/6 p-3">{location}</td>

      <td className="w-1/6 p-3">{orders}</td>

      <td className="w-1/6 p-3">{spent}</td>
    </tr>
  );
}
