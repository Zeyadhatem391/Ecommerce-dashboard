import { Product1 } from "@/assets/images/images";
import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";
import PaginationSection from "@/components/molecules/PaginationSection";
import Toolbar from "@/components/molecules/Toolbar";
import Image from "next/image";

const dataTable = [
  {
    id: "1",
    titel: "Men Grey Hoodie",
    type: "Hoodies",
    image: Product1,
    inventory: "96 in stock",
    color: "black",
    price: "$49.90",
    rating: "5.0 (32 Votes)",
  },
  {
    id: "2",
    titel: "Men Grey Hoodie",
    type: "Hoodies",
    image: Product1,
    inventory: "96 in stock",
    color: "black",
    price: "$49.90",
    rating: "5.0 (32 Votes)",
  },
  {
    id: "3",
    titel: "Women Striped T-Shirt",
    type: "Hoodies",
    image: Product1,
    inventory: "Out of Stock",
    color: "black",
    price: "$49.90",
    rating: "5.0 (32 Votes)",
  },
];

const InventoryStyle = (status: string) => {
  switch (status) {
    case "Out of Stock":
      return "bg-gray-100 text-gray-600";
    default:
      return "";
  }
};

export default function ProductsPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Products" />

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <thead className="border-b-2 border-gray-200">
            <tr className="ds-text-disabled">
              <th className="w-2/6 text-left p-3 font-normal">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                  <span>Product</span>
                </div>
              </th>

              <th className="w-1/6 text-left p-3 font-normal">Inventory</th>
              <th className="w-1/6 text-left p-3 font-normal">Color</th>
              <th className="w-1/6 text-left p-3 font-normal">Price</th>
              <th className="w-1/6 text-left p-3 font-normal">Rating</th>
            </tr>
          </thead>

          <tbody>
            {dataTable.map((item) => (
              <tr
                key={item.id}
                className="ds-text-primary border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="w-2/6 p-3 ">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <div className="flex gap-4">
                      <Image
                        src={item.image}
                        alt="Product"
                        width={60}
                        height={15}
                      />
                      <div className="flex flex-col gap-1">
                        <span>{item.titel}</span>
                        <span className="ds-text-disabled">{item.type}</span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="w-1/6 p-3">
                  <span
                    className={`font-medium px-2.5 py-1.5 rounded-sm ${InventoryStyle(
                      item.inventory,
                    )}`}
                  >
                    {item.inventory}
                  </span>
                </td>

                <td className="w-1/6 p-3">{item.color}</td>

                <td className="w-1/6 p-3">{item.price}</td>

                <td className="w-1/6 p-3">{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <PaginationSection />
      </div>
    </DashbordLayout>
  );
}
