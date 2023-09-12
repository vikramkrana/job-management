import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioInputGroupProps {
  name: string;
  title: string;
  options: RadioOption[];
  selectedValue: string | null;
  onSelectionChange: (value: string) => void;
}

const RadioInputGroup: React.FC<RadioInputGroupProps> = ({
  name,
  title,
  options,
  selectedValue,
  onSelectionChange,
}) => {
  return (
    <div>
      <p className="mb-3 flex text-sm">{title}</p>
      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex gap-1 text-sm text-[#7A7A7A]"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === selectedValue}
              onChange={() => onSelectionChange(option.value)}
              className="h-5 w-5"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInputGroup;
