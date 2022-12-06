export interface IContact {
  id: number;
  title: string;
  address: string;
  mailto?: string;
}

export const CONTACTS: IContact[] = [
  {
    id: 1,
    title: 'Dirección Río Grande:',
    address: 'D Agostini 1030, Río Grande, Tierra del Fuego',
  },
  {
    id: 2,
    title: 'Dirección Tolhuin:',
    address: 'Teal 427, Tolhuin, Tierra del Fuego',
  },
  {
    id: 3,
    title: 'Email:',
    address: 'administracion@tdfsatelital.com',
    mailto: 'mailto:administracion@tdfsatelital.com.ar',
  },
];
