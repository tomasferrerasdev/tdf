import { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { CONTACTS } from '../../../constants';

const DynamicMap: ComponentType<{}> = dynamic(
  () => import('./Mapbox').then((mod) => mod.Mapbox),
  {
    ssr: false,
  }
);

export const Location = () => {
  return (
    <div className="container min-h-[90vh] mx-auto py-10 px-4 flex flex-col text-black justify-center gap-10">
      <div className="font-montserrat text-3xl font-bold md:text-[40px] leading-tight">
        <h2>Cobertura en las ciudades de Rio Grande y tolhuin.</h2>
        <h2>
          San Sebastián, zonas rurales y rutas provinciales en Tierra del Fuego.
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {CONTACTS.map(({ id, title, address }) => (
          <div key={id} className="md:flex items-center gap-2">
            <h3 className="text-xl font-nunito font-bold md:text-2xl">
              {title}
            </h3>
            <p className="md:text-xl">{address}</p>
          </div>
        ))}
      </div>

      <DynamicMap />
    </div>
  );
};
