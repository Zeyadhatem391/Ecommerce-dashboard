import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";

export default function CustomerNotes() {
  return (
    <>
      <div className="flex flex-col mb-6">
        <Titel size="lg" className="font-semibold">
          Customer Notes
        </Titel>
        <Text>Add notes about customer</Text>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Notes</label>

          <textarea
            rows={3}
            placeholder="Add notes about customer"
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>
    </>
  );
}
