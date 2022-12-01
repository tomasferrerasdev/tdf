import { Navbar } from '../Navbar';

export const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-[url('/images/bg.jpg')] bg-no-repeat bg-center">
        <Navbar />
      </div>
    </>
  );
};
