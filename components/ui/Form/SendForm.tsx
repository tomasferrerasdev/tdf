import { useState } from 'react';
import { SendContactForm } from '../../../lib/api';
import toast, { Toaster } from 'react-hot-toast';

export interface IEmail {
  fullname: string;
  email: string;
  subject: string;
  message: string;
  longitude: string;
  latitude: string;
}

export const SendForm = () => {
  const [longitude, setLongitude] = useState<string>('No hay informacion');
  const [latitude, setLatitude] = useState<string>('No hay informacion');

  const [email, setEmail] = useState<IEmail>({
    fullname: '',
    email: '',
    subject: '',
    message: '',
    longitude: '',
    latitude: '',
  });

  const getPosition = (): void => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude.toString();
      const lon = position.coords.longitude.toString();

      setLongitude(lon);
      setLatitude(lat);
    });
  };

  const handleChange = (e: { target: { name: any; value: any } }): void => {
    getPosition();
    setEmail({
      ...email,
      longitude,
      latitude,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await toast.promise(SendContactForm(email), {
        loading: 'Enviando...',
        success: <b>Enviado correctamente!</b>,
        error: (
          <b>Ooops! hubo un error, prueba contactandonos por otro medio</b>
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-8 md:flex-row">
          <div className="flex flex-col-reverse flex-1 gap-2 sm:gap-2">
            <input
              type="text"
              id="name"
              name="fullname"
              className="shadow-sm border border-none text-sm block w-full p-3 py-4 bg-black"
              placeholder="Ejemplo: Hilario Martin Ordoñez"
              required
              value={email.fullname}
              onChange={handleChange}
            />
            <label className="block text-sm font-medium ">
              Nombre completo{' '}
              <span
                className={`text-[#DF4B4B] ${
                  !email.fullname ? `visible` : `hidden`
                }`}
              >
                * requerido
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse flex-1 gap-2 sm:gap-2">
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm border border-none text-sm block w-full p-3 py-4 bg-black"
              placeholder="Ejemplo: nombre@gmail.com"
              required
              value={email.email}
              onChange={handleChange}
            />
            <label className="block text-sm font-medium ">
              Email{' '}
              <span
                className={`text-[#DF4B4B] ${
                  !email.email ? `visible` : `hidden`
                }`}
              >
                * requerido
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2 sm:gap-2">
          <label className="block text-sm font-medium">
            Asunto{' '}
            <span
              className={`text-[#DF4B4B] ${
                !email.subject ? `visible` : `hidden`
              }`}
            >
              * requerido
            </span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 py-4 w-full text-sm border border-none shadow-sm bg-black"
            placeholder="En qué podemos ayudarte"
            required
            value={email.subject}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2 flex flex-col flex-1 gap-2 sm:gap-2">
          <label className="block text-sm font-medium">
            Mensaje{' '}
            <span
              className={`text-[#DF4B4B] ${
                !email.message ? `visible` : `hidden`
              }`}
            >
              * requerido
            </span>
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            className="block p-3 py-4 w-full text-sm shadow-sm border border-none resize-none bg-black"
            placeholder="Dejanos tu consulta..."
            value={email.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white bg-black sm:w-fit"
          >
            Envianos tu ubicacion
          </button>
        </div>
        <Toaster />
      </form>
    </>
  );
};
