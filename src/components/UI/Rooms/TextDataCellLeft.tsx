import React, { FC } from "react";

const TextDataCellLeft: FC = ({ children }) => {
  return (
    <td className="py-3 px-7">
      <div className="flex ">
        <span className="font-medium">{children}</span>
      </div>
    </td>
  );
};

export default TextDataCellLeft;
