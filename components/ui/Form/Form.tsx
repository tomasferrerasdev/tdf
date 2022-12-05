import { SendForm } from './SendForm';

export const Form = () => {
  return (
    <>
      <div
        className="container min-h-[800px] mx-auto py-16 px-4 flex flex-col text-white justify-center gap-10"
        id="contact"
      >
        <div className="font-montserrat text-3xl font-bold md:text-[40px] leading-tight">
          <h2>Contactanos:</h2>
        </div>
        <SendForm />
      </div>
    </>
  );
};
