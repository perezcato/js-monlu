import React, {InputHTMLAttributes} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputContainerClassName?: string
}

const InputContainer = (props: Props) => {

  const inputProps = {...props, className: undefined}

  return (
    <div className="flex items-center">
      <div className="w-1/6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 pr-3">
          {props.name}
        </label>
      </div>
      <div className="flex-1">
        <div className={`mt-1 w-1/2 border rounded-md border-gray-300 overflow-hidden shadow-sm ${props.inputContainerClassName}`}>
          <input
            {...inputProps}
            className={`block w-full px-5 py-2 border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${props.className}`}
          />
        </div>
      </div>
    </div>
  );
};

export default InputContainer;