import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import PaginationSection from "@/shared/components/molecules/PaginationSection";
import Toolbar from "@/shared/components/molecules/Toolbar";
import { customerData } from "@/data/Customer";
import CustomerCard from "@/modules/customers/components/molecules/CustomerCard";
import TableHeader from "@/shared/components/molecules/TableHeader";
import { customerColumns } from "@/data/TablesHead";



export default function CustomersPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Customers" />

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <TableHeader columns={customerColumns} />

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
