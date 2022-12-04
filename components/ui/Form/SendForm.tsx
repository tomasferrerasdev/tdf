import { useState } from 'react';
import { SendContactForm } from '../../../lib/api';

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
    console.log(email);
    await SendContactForm(email);
  };

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-8 md:flex-row">
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium ">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              className="shadow-sm border border-none text-sm block w-full p-3 bg-black"
              placeholder="Ejemplo: Tomas Ferreras"
              required
              value={email.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium ">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm border border-none text-sm block w-full p-3 bg-black"
              placeholder="Ejemplo: nombre@gmail.com"
              required
              value={email.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm border border-none shadow-sm bg-black"
            placeholder="En que podemos ayudarte"
            required
            value={email.subject}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium ">Mensaje</label>
          <textarea
            id="message"
            rows={6}
            name="message"
            className="block p-3 w-full text-sm shadow-sm border border-none resize-none bg-black"
            placeholder="Dejanos tu consulta..."
            value={email.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white bg-black sm:w-fit"
        >
          Enviar mail
        </button>
      </form>
    </>
  );
};
