export type FetchPizzasArguments = {
  categoryId: string;
  sortProp: string;
  order: string;
  search: string;
  currentPage: number;
};

export type Pizza = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  count: number;
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaState {
  items: Pizza[];
  status: Status;
}
