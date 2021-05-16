import React, { FC } from "react";

const Modal: FC = ({ children }) => {
  return (
    <div className="absolute inset-0 z-10 flex w-screen justify-center h-screen items-center bg-gray-200 bg-opacity-50 antialiased">
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;
