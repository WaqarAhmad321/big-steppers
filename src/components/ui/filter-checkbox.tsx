import React from "react";
import { Check } from "lucide-react";

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  count?: number;
}

export default function FilterCheckbox({
  label,
  checked,
  onChange,
  count,
}: FilterCheckboxProps) {
  return (
    <label className="flex items-center justify-between py-1.5 cursor-pointer group">
      <div className="flex items-center">
        <div className="relative flex items-center justify-center w-5 h-5">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only"
          />
          <div
            className={`
            absolute inset-0 rounded-md border-2 transition-colors duration-200
            ${
              checked
                ? "border-red-600 bg-red-600"
                : "border-gray-300 bg-white group-hover:border-red-600"
            }
          `}
          />
          {checked && (
            <Check className="w-3 h-3 text-white transform scale-0 transition-transform duration-200 ease-spring animate-in" />
          )}
        </div>
        <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-xs text-gray-500">{count}</span>
      )}
    </label>
  );
}
