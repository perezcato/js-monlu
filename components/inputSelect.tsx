import React from "react";
import Select, { SingleValue } from "react-select";

type SelectProps = {
  options: { value: any; label: string; disabled?: boolean }[];
  value?: any;
  handleChange?: (e: React.ChangeEvent) => void;
  name: string;
};
const InputSelect = (props: SelectProps) => {
  const { value, options, handleChange, name } = props;

  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-2.5 my-3 bg-white border-2 border-[rgba(231,234,243,.7)] text-[#677788] text-[0.875rem] rounded-md focus:ring-4 focus:ring-[#86b7fe]/50"
      >
        {options.map((opt) => (
          <option value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
