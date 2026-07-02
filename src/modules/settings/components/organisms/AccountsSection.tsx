import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import SwitchText from "@/shared/components/molecules/SwitchText";
import { accounts } from "../../data/setting";

export default function AccountsSection() {
  return (
    <>
      {accounts.map((items) => (
        <div key={items.id}>
          <div className="flex justify-between py-4">
            <div className="flex flex-col ">
              <Titel size="lg" className="font-semibold">
                {items.titel}
              </Titel>
              <Text>{items.text}</Text>
            </div>
            <SwitchText checked={items.checked} />
          </div>
          <div className="my-3 border-b-2 border-gray-200"></div>
        </div>
      ))}
    </>
  );
}
