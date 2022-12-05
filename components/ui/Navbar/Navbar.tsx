import Dropdown from './Dropdown';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto py-10 px-4 flex items-center justify-between w-full ">
        <div className="flex gap-8">
          <a
            href="#"
            className="font-nunito font-extrabold text-2xl text-white"
          >
            TDFSatelital
          </a>
          <div className="sm:hidden">
            <MobileMenu />
          </div>
          <div className="hidden sm:flex">
            <div className="flex gap-4 text-white text-xl items-center">
              <a href="#">servicios</a>
              <a href="#">nosotros</a>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex">
          <Dropdown />
        </div>
      </nav>
    </>
  );
};
