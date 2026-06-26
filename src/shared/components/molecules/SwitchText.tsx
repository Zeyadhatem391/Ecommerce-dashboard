"use client";

import { Switch } from "@/components/ui/switch";

interface SwitchTextProps {
  text: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function SwitchText({
  text,
  checked,
  onCheckedChange,
}: SwitchTextProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <Switch
        size="default"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />

      <span className="font-medium">{text}</span>
    </label>
  );
}