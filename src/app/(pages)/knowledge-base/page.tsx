import ContactSupport from "@/modules/knowledge-base/components/molecules/ContactSupport";
import KnowledgeGrid from "@/modules/knowledge-base/components/molecules/KnowledgeGrid";
import SearchKnowledge from "@/modules/knowledge-base/components/molecules/SearchKnowledge";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";

export default function KnowledgePage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Knowledge Base" />

      <div className="mt-8 space-y-8">
        <SearchKnowledge />
        <KnowledgeGrid />
        <div className="my-7 border-b-2 border-gray-200"></div>
        <ContactSupport />
      </div>
    </DashbordLayout>
  );
}
