"use client";
import CheckboxText from "./CheckboxText";

interface TableHeaderProps {
  columns: {
    title: string;
    width: string;
    hasCheckbox?: boolean;
  }[];
}

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="border-b-2 border-gray-200">
      <tr className="ds-text-disabled">
        {columns.map((column, index) => (
          <th
            key={index}
            className={`${column.width} text-left p-3 font-normal`}
          >
            {column.hasCheckbox ? (
              <CheckboxText text={column.title} />
            ) : (
              column.title
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}
