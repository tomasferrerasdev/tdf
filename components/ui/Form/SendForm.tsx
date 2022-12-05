import { useState } from 'react';
import { SendContactForm } from '../../../lib/api';
import toast, { Toaster } from 'react-hot-toast';

export interface IEmail {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

export const SendForm = () => {
  const [email, setEmail] = useState<IEmail>({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }): void => {
    setEmail({
      ...email,
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
          <div className="flex flex-col flex-1 gap-2 sm:gap-2">
            <label className="block text-sm font-medium ">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              className="shadow-sm border border-none text-sm block w-full p-3 py-4 bg-black"
              placeholder="Ejemplo: Tomas Ferreras"
              required
              value={email.fullname}
              onChange={handleChange}
            />
            <p
              className={`text-red-500 text-xs italic ${
                !email.fullname ? `` : `invisible`
              }`}
            >
              Este campo es obligatorio
            </p>
          </div>

          <div className="flex flex-col flex-1 gap-2 sm:gap-2">
            <label className="block text-sm font-medium ">
              Email <span className="text-red-500">*</span>
            </label>
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
            <p
              className={`text-red-500 text-xs italic ${
                !email.email ? `` : `invisible`
              }`}
            >
              {!email.email && ' Este campo es obligatorio'}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2 sm:gap-2">
          <label className="block text-sm font-medium">
            Asunto <span className="text-red-500">*</span>
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
          <p
            className={`text-red-500 text-xs italic ${
              !email.subject ? `` : `invisible`
            }`}
          >
            Este campo es obligatorio
          </p>
        </div>
        <div className="sm:col-span-2 flex flex-col flex-1 gap-2 sm:gap-2">
          <label className="block text-sm font-medium">
            Mensaje <span className="text-red-500">*</span>
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
          <p
            className={`text-red-500 text-xs italic ${
              !email.message ? `` : `invisible`
            }`}
          >
            Este campo es obligatorio
          </p>
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white bg-black sm:w-fit"
        >
          Enviar mail
        </button>
        <Toaster />
      </form>
    </>
  );
};
