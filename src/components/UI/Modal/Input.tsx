import React, { FC } from "react";
import { InputProps } from "../Input";

const Input: FC<InputProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
    />
  );
};

export default Input;
