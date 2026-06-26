"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "@/assets/icons/icons";

export default function BackPage() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-0.5 cursor-pointer ds-text-disabled ds-text-sm"
    >
      <ArrowLeft className="w-6 h-4" />
      Back
    </button>
  );
}
