import AddressSection from "../molecules/AddressSection";
import BackPage from "../molecules/BackPage";
import ButtonsExport from "../molecules/ButtonsExport";
import DashbordLayout from "./DashbordLayout";

interface AddPageLayoutProps {
  children: React.ReactNode;
  titel?: string;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function AddPageLayout({
  children,
  titel,
  onSave,
  onCancel,
}: AddPageLayoutProps) {
  return (
    <DashbordLayout>
      <BackPage />

      <div className="flex justify-between mb-6">
        <AddressSection titel={titel} />

        <ButtonsExport
          nameButton="Cancel"
          nameButtonAdd="Save"
          onSave={onSave}
          onCancel={onCancel}
        />
      </div>

      {children}

      <div className="my-7 border-b-2 border-gray-200"></div>

      <div className="flex justify-end">
        <ButtonsExport
          nameButton="Cancel"
          nameButtonAdd="Save"
          onSave={onSave}
          onCancel={onCancel}
        />
      </div>
    </DashbordLayout>
  );
}