import React, { FC } from "react";

interface SelectProps {
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Select: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select
      className="w-full  pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
      onChange={onChange}
    >
      {options.map((option) => {
        return <option>{option}</option>;
      })}
    </select>
  );
};

export default Select;
