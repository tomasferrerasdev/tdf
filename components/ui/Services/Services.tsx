import { ServiceItem } from './ServiceItem';

export const Services = () => {
  return (
    <div id="services">
      <div className="container relative min-h-[100vh] mx-auto pb-10 px-4 z-10 flex flex-col text-white justify-center gap-16 md:gap-20">
        <h2 className="font-montserrat text-4xl font-bold md:text-5xl">
          Brindamos servicios de internet para uso doméstico o empresarial
        </h2>
        <ServiceItem />
      </div>
    </div>
  );
};
