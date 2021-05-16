import React, { FC, MouseEventHandler } from "react";
interface OkSave {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const OkSaveButton: FC<OkSave> = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OkSaveButton;
