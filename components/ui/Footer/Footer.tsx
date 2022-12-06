export const Footer = () => {
  return (
    <>
      <div className="container min-h-[50px] gap-6 flex justify-between flex-col sm:flex-row items-start sm:items-center mx-auto py-10 px-4 text-white border-t border-[#8cd6b1]">
        <div className="flex align-middle gap-6 items-center">
          <a
            href="#"
            className="font-nunito font-extrabold text-2xl text-white"
          >
            TDFSatelital
          </a>
          <div className="flex gap-4 text-white text-xl items-center">
            <a href="#">servicios</a>
            <a href="#">nosotros</a>
          </div>
        </div>
        <div className="flex flex-col sm:gap-2 text-white text-lg justify-start items-start">
          <a href="#">Teléfono: 02964 61-4077</a>
          <a href="#">Solo empresas: +54 9 2964 46-7465</a>
        </div>
      </div>
    </>
  );
};
