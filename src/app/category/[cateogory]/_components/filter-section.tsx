import React from "react";
import { ChevronDown } from "lucide-react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FilterSection({
  title,
  children,
  isOpen,
  onToggle,
}: FilterSectionProps) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left group">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-spring
            ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        className={`
        grid transition-all duration-300 ease-spring
        ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
      `}>
        <div className="overflow-hidden">
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
