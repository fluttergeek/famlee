import React, { FC, MouseEventHandler } from "react";

interface ActionSVGProps {
  children: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ActionSVG: FC<ActionSVGProps> = ({ children, onClick }) => {
  return (
    <button
      className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {children}
      </svg>
    </button>
  );
};

export default ActionSVG;
