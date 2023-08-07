export type cartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number;
  types: string;
  count: number;
};

export interface cartSliceState {
  totalPrice: number;
  items: cartItem[];
}
