"use client";

import { useState } from "react";
import CardPricing from "@/modules/pricing/components/molecules/CardPricing";
import { price } from "@/modules/pricing/data/pricing";
import Titel from "@/shared/components/atoms/Titel";
import Text from "@/shared/components/atoms/Text";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";

export default function Page() {
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");

  return (
    <DashbordLayout>
      <AddressSection titel="Choose a Plan" />
      <div className="flex flex-col items-center justify-center ds-bg-alt rounded-xl p-6 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <Titel variant="primary" size="2xl" className="font-bold">
            Pricing Plans
          </Titel>
          <Text center className="max-w-md text-gray-500">
            Familiarize yourself with the payment plans below.
            <br />
            Pick the best pricing plan that fits your needs.
          </Text>

          <div className="mt-2 flex rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setBillingPeriod("month")}
              className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                billingPeriod === "month"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingPeriod("year")}
              className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                billingPeriod === "year"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {price.map((items) => (
            <CardPricing
              key={items.id}
              title={items.title}
              duration={items.duration}
              features={items.features}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>

        <Text className="mt-4">Cancel or upgrade your plan anytime</Text>
      </div>
    </DashbordLayout>
  );
}
