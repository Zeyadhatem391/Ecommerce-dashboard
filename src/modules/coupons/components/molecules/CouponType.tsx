import { couponTypes } from "@/modules/coupons/data/Coupons";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";

export default function CouponType() {
  return (
    <>
      <div className="flex flex-col mb-6">
        <Titel size="lg" className="font-semibold">
          Coupon Type
        </Titel>
        <Text>Type of coupon you want to create</Text>
      </div>

      <div className="mb-6 grid grid-cols-4 gap-4">
        {couponTypes.map(({ id, title, icon }) => (
          <div
            key={id}
            className="flex h-30 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            <Icon IconComponent={icon} className="text-4xl" />

            <span className="font-medium">{title}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Discount Value</label>

            <input
              type="text"
              placeholder="Amount"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Applies to</label>

            <input
              type="text"
              placeholder="Choose"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Duration</label>

            <input
              type="text"
              placeholder="Set Duration"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Usage Limits</label>

            <input
              type="text"
              placeholder="Amount of uses"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <label className="flex items-center gap-3 cursor-pointer select-none w-1/2">
            <input type="checkbox" className="w-4 h-4 cursor-pointer" />

            <span>Don't set duration</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer select-none w-1/2">
            <input type="checkbox" className="w-4 h-4 cursor-pointer" />

            <span>Don't limit amout of uses</span>
          </label>
        </div>
      </div>
    </>
  );
}
