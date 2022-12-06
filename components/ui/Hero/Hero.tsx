import Image from 'next/image';
import { Navbar } from '../Navbar';

export const Hero = () => {
  return (
    <>
      <div className="w-full bg-cover bg-[#000000] bg-no-repeat bg-center">
        <Navbar />
        <div>
          <div className="container mx-auto py-16 px-4 flex flex-col justify-start gap-8 md:gap-12 items-center">
            <h1 className="text-4xl md:text-8xl md:text-center md:max-w-4xl font-montserrat text-white text-left">
              Llegamos donde nadie más llega
            </h1>
            <p className="text-xl md:text-2xl md:text-center md:max-w-[800px] font-nunito text-white text-left">
              Brindamos servicios de internet domiciliario y dedicado a empresas
              en toda la isla de Tierra del Fuego estableciendo un punto único
              de encuentro.
            </p>
            <div className="flex gap-6 w-full md:justify-center z-10">
              <a
                className="w-[150px] text-black flex justify-center px-10 py-4 bg-white"
                href="#services"
              >
                <p className="font-bold">Conocenos</p>
              </a>
              <a
                className="w-[150px] bg-white flex justify-center px-10 py-4 border border-white"
                href="#contact"
              >
                <p className="font-bold">Contactanos</p>
              </a>
            </div>
          </div>
          <div className=" h-[400px] w-full relative">
            <div className="absolute h-[450px] w-full top-[-100px] md:h-[600px] md:top-[-150px]">
              <Image
                src="/images/hero-img.webp"
                fill
                alt="data globe image"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
