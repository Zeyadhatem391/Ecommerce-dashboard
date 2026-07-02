import CustomerAddress from "@/modules/customers/components/molecules/CustomerAddress";
import CustomerInfo from "@/modules/customers/components/molecules/CustomerInfo";
import CustomerNotes from "@/modules/customers/components/molecules/CustomerNotes";

import AddPageLayout from "@/shared/components/layout/AddPageLayout";

export default function page() {
  return (
    <AddPageLayout titel="Add Customer">
      <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
        <CustomerInfo />

        <div className="my-7 border-b-2 border-gray-200"></div>

        <CustomerAddress />

        <div className="my-7 border-b-2 border-gray-200"></div>

        <CustomerNotes />
      </div>
    </AddPageLayout>
  );
}
