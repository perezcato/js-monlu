import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

const Input = (props: Partial<InputProps>) => {
  const { label, className, ...inputProps } = props;
  return (
    <div>
      <label htmlFor={props.id} className="text-xs font-medium text-gray-700">
        {props.label}
      </label>
      <div className="mt-1 border rounded-md border-gray-300 overflow-hidden shadow-sm">
        <input
          {...inputProps}
          className={`block w-full px-5 py-2 border-0 sm:text-sm outline-none ${props.className}`}
        />
      </div>
    </div>
  );
};

export default Input;
