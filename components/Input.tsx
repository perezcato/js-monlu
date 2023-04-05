import React, { ChangeEvent } from "react";
interface InputProps {
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  label: string;
  id: string;
  className: string;
}

const Input = (props: Partial<InputProps>) => {
    console.log(props.className)
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
