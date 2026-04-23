import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";
import PaginationSection from "@/components/molecules/PaginationSection";
import ProductCard from "@/components/molecules/ProductCard";
import Toolbar from "@/components/molecules/Toolbar";
import { productData } from "@/data/Products";


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
            {productData.map((item) => (
             <ProductCard key={item.id} {...item} />
            ))}
          </tbody>
        </table>

        <PaginationSection />
      </div>
    </DashbordLayout>
  );
}
