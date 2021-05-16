import React, {FC} from 'react'

interface Header {
  title: string;
  closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Header:FC<Header> = ({closeModal, title}) => {
    return (
      <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <p className="font-semibold text-gray-800">{title}</p>
        <button onClick={closeModal}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    );
}

export default Header
