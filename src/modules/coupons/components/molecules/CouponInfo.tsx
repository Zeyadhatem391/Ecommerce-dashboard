import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";

export default function CouponInfo() {
  return (
    <>
      <div className="flex flex-col mb-6">
        <Titel size="lg" className="font-semibold">
          Coupon Information
        </Titel>
        <Text>Code will be used by users in checkout</Text>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium">Coupon Code</label>

          <input
            type="text"
            placeholder="Shipfree20"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium">Coupon Name</label>

          <input
            type="text"
            placeholder="Free Shipping"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>
    </>
  );
}
