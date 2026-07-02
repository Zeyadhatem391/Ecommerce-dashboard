import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";

export default function CustomerAddress() {
  return (
    <>
      <div className="flex flex-col mb-6">
        <Titel size="lg" className="font-semibold">
          Customer Address
        </Titel>
        <Text>Shipping address information</Text>
      </div>

      <div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Address</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Apartment</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-medium">City</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="flex gap-5 w-1/2">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-medium">Country</label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-medium">Postal Code</label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label className="font-medium">phone</label>

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
