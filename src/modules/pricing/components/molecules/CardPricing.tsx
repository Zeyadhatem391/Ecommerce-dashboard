import Text from "@/shared/components/atoms/Text";
import { Check } from "@/assets/icons/icons";
import Titel from "@/shared/components/atoms/Titel";

interface Props {
  title: string;
  duration: Duration;
  features: Features;
  billingPeriod: "month" | "year";
}

interface Duration {
  month: Price;
  year: Price;
}

interface Price {
  price: number;
}

interface Features {
  ok: string[];
  no: string[];
}

export default function CardPricing({
  title,
  duration,
  features,
  billingPeriod,
}: Props) {
  const price =
    billingPeriod === "year" ? duration.year.price : duration.month.price;

  return (
    <div className="mt-8 flex w-80 flex-col gap-5 rounded-lg border bg-white p-7 shadow-sm transition hover:shadow-lg">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-4xl font-bold">${price}</span>
          <span className="ml-2 text-gray-500">
            /{billingPeriod === "year" ? "yearly" : "monthly"}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <Titel variant="primary" size="xl" className="font-bold">
            {title}
          </Titel>

          <Text>Start your business</Text>
        </div>
      </div>

      <div className="border-b border-gray-200" />

      <Text className="font-semibold">What's included</Text>

      <ul className="flex flex-col gap-4">
        {/* Available Features */}
        {features.ok.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-green-50 text-green-600">
              <Check size={14} />
            </div>

            <Text className="font-medium text-gray-800">{feature}</Text>
          </li>
        ))}

        {/* Not Available Features */}
        {features.no.map((feature) => (
          <li key={feature} className="flex items-center gap-3 opacity-60">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-400 font-bold">
              -
            </div>

            <Text className="text-gray-400 line-through">{feature}</Text>
          </li>
        ))}
      </ul>

      <button className="mt-3 rounded-md border p-2 font-semibold transition hover:bg-blue-700 hover:text-white cursor-pointer">
        Select Plan
      </button>
    </div>
  );
}
