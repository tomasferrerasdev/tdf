import { useState } from 'react';
import { MenuCloseIcon, MenuIcon } from '../../icons';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-10 right-4 z-10"
        >
          <MenuIcon size={8} strokeWidth={2} />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-10 right-4 z-30"
        >
          <MenuCloseIcon size={8} strokeWidth={2} />
        </button>
      )}
      <div
        className={`top-0 right-0 z-20 fixed bg-white w-full h-screen py-10 px-4 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 text-xl">
          <div className="w-full flex justify-center">
            <p>servicios</p>
          </div>
          <div className="w-full flex justify-center">
            <p>nosotros</p>
          </div>
          <div className="w-fit text-white flex justify-center px-10 py-4 bg-black">
            <p>contactanos</p>
          </div>
        </div>
      </div>
    </>
  );
};
