"use client";

import Button from "@/shared/components/atoms/Button";
import { Plus } from "@/assets/icons/icons";

interface ButtonsExportProps {
  nameButton: string;
  nameButtonAdd: string;
  href?: string;
  isIcon?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function ButtonsExport({
  nameButton,
  nameButtonAdd,
  href,
  isIcon = false,
  onSave,
  onCancel,
}: ButtonsExportProps) {
  return (
    <div className="flex gap-3">
      <Button
        size="sm"
        variant="outline1"
        className="font-semibold"
        tag="button"
        onClick={onCancel}
      >
        {nameButton}
      </Button>

      <Button
        size="sm"
        variant="primary"
        className="font-semibold"
        tag={href ? "link" : "button"}
        href={href}
        onClick={onSave}
      >
        {isIcon && <Plus className="h-7 w-7" />}
        {nameButtonAdd}
      </Button>
    </div>
  );
}
