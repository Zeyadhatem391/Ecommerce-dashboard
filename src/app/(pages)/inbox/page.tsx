import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import LeftInbox from "./components/LeftInbox";
import RightInbox from "./components/RightInbox";

export default function InboxPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Inbox" />

      <div className="ds-bg-alt w-full h-[80vh] flex rounded-xl shadow-sm overflow-hidden">
        <LeftInbox />

        <RightInbox />
      </div>
    </DashbordLayout>
  );
}
