import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";
import CustomerCard from "@/components/molecules/CustomerCard";
import PaginationSection from "@/components/molecules/PaginationSection";
import Toolbar from "@/components/molecules/Toolbar";
import { customerData } from "@/data/Customer";

export default function CustomersPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Customers" />

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <thead className="border-b-2 border-gray-200">
            <tr className="ds-text-disabled">
              <th className="w-3/6 text-left p-3 font-normal">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                  <span>Name</span>
                </div>
              </th>

              <th className="w-2/6 text-left p-3 font-normal">Location</th>
              <th className="w-1/6 text-left p-3 font-normal">Orders</th>
              <th className="w-1/6 text-left p-3 font-normal">Spent</th>
            </tr>
          </thead>

          <tbody>
            {customerData.map((item) => (
              <CustomerCard key={item.id} {...item} />
            ))}
          </tbody>
        </table>

        <PaginationSection />
      </div>
    </DashbordLayout>
  );
}
