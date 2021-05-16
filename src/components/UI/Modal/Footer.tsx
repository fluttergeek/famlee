import React, {FC} from 'react'

interface Footer {
  children: JSX.Element;
  closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Footer: FC<Footer> = ({ children, closeModal }) => {
  return (
    <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
      <button className="font-semibold text-gray-600" onClick={closeModal}>
        Cancel
      </button>
      {children}
    </div>
  );
};

export default Footer
