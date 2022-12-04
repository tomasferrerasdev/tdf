import { ServiceItem } from './ServiceItem';

export const Services = () => {
  return (
    <>
      <div className="container min-h-[90vh] mx-auto py-10 px-4 flex flex-col text-white justify-center gap-16 md:gap-20">
        <h2 className="font-montserrat text-4xl font-bold md:text-5xl">
          Brindamos servicios de internet para uso doméstico o empresarial
        </h2>
        <ServiceItem />
      </div>
    </>
  );
};
