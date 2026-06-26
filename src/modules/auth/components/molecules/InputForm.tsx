interface Props {
  titel: string;
  placeholder: string;
}

export default function InputForm({ titel, placeholder }: Props) {
  return (
    <div className="flex flex-col w-full mb-3">
      <label htmlFor="">{titel}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
    </div>
  );
}
