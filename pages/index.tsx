import {
  BaseLayout,
  Footer,
  Form,
  Hero,
  Location,
  Services,
} from '../components';

export default function Home() {
  return (
    <>
      <BaseLayout
        title={'TDFSatelital'}
        pageDescription={
          'Brindamos servicios de internet domiciliario y dedicado a empresas en toda la isla de Tierra del fuego estableciendo un punto único de encuentro.'
        }
      >
        <Hero />
        <Services />
        <Location />
        <div className="bg-[url(/images/footer-bg.jpg)]">
          <Form />
          <Footer />
        </div>
      </BaseLayout>
    </>
  );
}
