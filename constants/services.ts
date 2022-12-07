export interface IService {
  id: number;
  title: string;
  description: string;
  phone: string;
}

export const SERVICES: IService[] = [
  {
    id: 1,
    title: 'Doméstico',
    description:
      'Contamos con un equipo de asesoramiento para ayudarte a evaluar la mejor alternativa para adquirir nuestros servicios de internet.',
    phone: '+54 2964 61-4077',
  },
  {
    id: 2,
    title: 'Empresarial',
    description:
      'Fiber LAN to LAN, VPN, direcciones IP públicas estáticas, contamos con un equipo para asesorarlo y encontrar un paquete acorde a sus necesidades y la de su empresa.',
    phone: '+54 9 2964 46-7465',
  },
];
