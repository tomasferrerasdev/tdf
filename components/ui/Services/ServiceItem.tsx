import { SERVICES } from '../../../constants';

export const ServiceItem = () => {
  return (
    <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-10">
      {SERVICES.map(({ title, description, id, phone }) => (
        <div
          key={id}
          className="flex gap-5 border-l-2 border-gray_light md:px-4 md:py-1"
        >
          <span></span>
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-nunito font-semibold text-3xl">{title}</h3>
              <p className="font-nunito font-light text-xl">{description}</p>
            </div>
            {title === 'Empresarial' ? (
              <a
                className="bg-white text-black w-fit py-2 px-8 cursor-pointer"
                href="https://wa.me/5492964467465"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-xl">{phone}</p>
              </a>
            ) : (
              <a
                className="bg-white text-black w-fit py-2 px-8 cursor-pointer"
                href="tel:02964 61-4077"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-xl">{phone}</p>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
