import React, { FC } from "react";

interface Label {
    children: string
}

const InputLabel: FC<Label> = ({ children }) => {
  return <p className="mb-2 font-semibold text-gray-700">{children}</p>;
};

export default InputLabel;
