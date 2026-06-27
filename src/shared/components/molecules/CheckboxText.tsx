interface CheckboxTextProps {
  text?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function CheckboxText({
  text,
  checked = false,
  onChange,
}: CheckboxTextProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 cursor-pointer"
      />

      <span>{text}</span>
    </label>
  );
}
