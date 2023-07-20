import { SortPropertyEnum } from "../redux/slices/filterSlice";

export const categories: string[] = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy",
];
export const typeDough = ["Thin", "Traditional"];

export type sortListItem = {
  name: string;
  sort: SortPropertyEnum;
};

export const sortList: sortListItem[] = [
  { name: "Popular (up)", sort: SortPropertyEnum.RATING_DESC },
  { name: "Popular (down)", sort: SortPropertyEnum.RATING_ASC },
  { name: "Price (up)", sort: SortPropertyEnum.PRICE_DESC },
  { name: "Price (down)", sort: SortPropertyEnum.PRICE_ASC },
  { name: "Abc (up)", sort: SortPropertyEnum.NAME_DESC },
  { name: "Abc (down)", sort: SortPropertyEnum.NAME_ASC },
];
