import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";

export default function CustomerInfo() {
  return (
    <>
      <div className="flex flex-col mb-6">
        <Titel size="lg" className="font-semibold">
          Customer Information
        </Titel>
        <Text>Most important information about the customer</Text>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">First Name</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Last Name</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Email Address</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Phone Number</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}
