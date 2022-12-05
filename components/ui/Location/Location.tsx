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
    <div className="container min-h-[90vh] mx-auto pt-10 pb-16 px-4 flex flex-col text-white justify-center gap-10">
      <div className="font-montserrat text-3xl font-bold md:text-[40px] leading-tight">
        <h2>Cobertura en las ciudades de Río Grande y Tolhuin.</h2>
        <h2>
          San Sebastián, zonas rurales y rutas provinciales en Tierra del Fuego.
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {CONTACTS.map(({ id, title, address, mailto }) => (
          <div key={id} className="md:flex items-center gap-2">
            <h3 className="text-xl font-nunito font-bold">{title}</h3>
            {mailto ? (
              <a href={mailto} className="underline underline-offset-8">
                {address}
              </a>
            ) : (
              <p>{address}</p>
            )}
          </div>
        ))}
      </div>

      <DynamicMap />
    </div>
  );
};
