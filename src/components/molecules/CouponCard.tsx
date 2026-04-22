import { StaticImageData } from "next/image";
import Images from "../atoms/Image";

interface Props {
  image: StaticImageData;
  titel: string;
  subTitel: string;
  usage: number;
  status: string;
  date: string;
}
export default function CouponCard({
  image,
  titel,
  subTitel,
  usage,
  status,
  date,
}: Props) {
  const couponStatus = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Expired":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <tr className="ds-text-primary border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="w-2/6 p-3 ">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />
          <div className="flex gap-3 items-center">
            <Images src={image} alt="Product" width={40} height={40} />
            <div className="flex flex-col ">
              <span>{titel}</span>
              <span className="ds-text-disabled">{subTitel}</span>
            </div>
          </div>
        </div>
      </td>

      <td className="w-2/6 p-3">{usage} times</td>

      <td className="w-1/6 p-3 ">
        <span
          className={`font-medium px-2.5 py-1.5 rounded-sm ${couponStatus(
            status,
          )}`}
        >
          {status}
        </span>
      </td>

      <td className="w-1/6 p-3">{date}</td>
    </tr>
  );
}
