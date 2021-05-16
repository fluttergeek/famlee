import React, { FC, MouseEventHandler } from "react";
interface DeleteProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const DeleteButton: FC<DeleteProps> = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-white font-semibold bg-red-500 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DeleteButton;
