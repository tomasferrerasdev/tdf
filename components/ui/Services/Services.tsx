import Image from 'next/image';
import { ServiceItem } from './ServiceItem';

export const Services = () => {
  return (
    <>
      <div className="relative" id="services">
        <div className="container min-h-[100vh] mx-auto pb-10 px-4 z-10 flex flex-col text-white justify-center gap-16 md:gap-20">
          <h2 className="font-montserrat text-4xl font-bold md:text-5xl">
            Brindamos servicios de internet para uso doméstico o empresarial
          </h2>
          <ServiceItem />
        </div>
        <Image
          src="/images/sparks.svg"
          width={309}
          height={453}
          alt="sparks image"
          style={{
            position: 'absolute',
            right: '10px',
            bottom: '-100px',
            zIndex: 1,
          }}
        />
      </div>
    </>
  );
};
