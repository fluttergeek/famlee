import React, { FC } from "react";

const TextDataCell: FC = ({ children }) => {
  return (
    <td className="py-3 px-6">
      <div className="flex text-center">
        <span className="w-full font-medium">{children}</span>
      </div>
    </td>
  );
};

export default TextDataCell;
