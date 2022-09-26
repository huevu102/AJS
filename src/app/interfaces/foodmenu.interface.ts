export interface IMenu {
  id: number;
  name: string;
  icon: string;
}

export interface IFoodMenu {
  message: string;
  data: IMenu[];
}

export interface Ilist {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface IFoodDetails {
  message: string;
  data: Ilist[];
}
