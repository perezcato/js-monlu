import React, {ChangeEvent, InputHTMLAttributes} from "react";
// interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
//   label: string
// }

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string}

const Input = (props: Partial<InputProps>) => {
  const {label, className, ...inputProps} = props
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <div
        className="mt-1 border rounded-md border-gray-300 overflow-hidden shadow-sm"
      >
        <input
          {...inputProps}
          className={`block w-full px-5 py-2 border-0 sm:text-sm ${props.className}`}
        />
      </div>

    </>
  );
};

export default Input;
