import { ServiceItem } from './ServiceItem';

export const Services = () => {
  return (
    <>
      <div
        className="relative bg-cover md:bg-contain bg-left-bottom bg-[url('/images/bg-3.png')] bg-no-repeat"
        id="services"
      >
        <div className="container min-h-[100vh] mx-auto pb-10 px-4 z-10 flex flex-col text-white justify-center gap-16 md:gap-20">
          <h2 className="font-montserrat text-4xl font-bold md:text-5xl">
            Brindamos servicios de internet para uso doméstico o empresarial
          </h2>
          <ServiceItem />
        </div>
      </div>
    </>
  );
};

/*
relative bg-cover bg-center md:bg-right-bottom md:bg-contain bg-[url('/images/gradient-2.jpg')] bg-no-repeat
*/
