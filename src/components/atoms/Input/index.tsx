import React from "react";

interface TextInputFieldProps {
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean | any;
  label?: string;
  required?: boolean;
  placeholder?: string;
  labelClassName?: string;
  type?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  name,
  value,
  onChange,
  error,
  label,
  required,
  placeholder,
  labelClassName = "",
  type = "text",
}) => {
  return (
    <div className="w-full">
      <div className={`mb-1 flex text-sm ${labelClassName}`}>
        <p className={`${error ? "text-[#D86161]" : "text-[#212121]"}`}>
          {label}
        </p>
        <p className="text-[#D86161]">{required && "*"}</p>
      </div>
      <div
        className={`h-9 w-full overflow-hidden rounded-[5px] border ${
          error ? "border-[#D86161]" : " border-[#E6E6E6]"
        }`}
      >
        <input
          type={type}
          className="h-full w-full px-3 py-2 text-sm  text-gray-600 outline-none placeholder:text-[#7A7A7A]"
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
          required={required}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInputField;
