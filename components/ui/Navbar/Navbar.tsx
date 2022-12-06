import Dropdown from './Dropdown';

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

          <div className="gap-4 text-white text-xl items-center hidden sm:flex">
            <a href="#services">servicios</a>
            <a href="#location">nosotros</a>
          </div>
        </div>
        <Dropdown />
      </nav>
    </>
  );
};
