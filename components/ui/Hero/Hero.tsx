import { Navbar } from '../Navbar';

export const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-[url('/images/bg.jpg')] bg-no-repeat bg-center">
        <Navbar />
        <div className="container mx-auto py-10 px-4 h-[75vh] flex flex-col justify-center gap-8 md:gap-12 items-center">
          <h1 className="text-4xl md:text-8xl md:text-center md:max-w-4xl font-montserrat text-white text-left">
            Llegamos donde nadie más llega
          </h1>
          <p className="text-xl md:text-2xl md:text-center md:max-w-[800px] font-nunito text-white text-left">
            Brindamos servicios de internet domiciliario y dedicado a empresas
            en toda la isla de Tierra del Fuego estableciendo un punto único de
            encuentro.
          </p>
          <div className="flex gap-6 w-full md:justify-center">
            <a
              className="w-[150px] text-black flex justify-center px-10 py-4 bg-white"
              href="#services"
            >
              <p className="font-bold">Conocenos</p>
            </a>
            <button className="w-[150px] text-white flex justify-center px-10 py-4 border border-white">
              <p className="font-bold">Contactanos</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
