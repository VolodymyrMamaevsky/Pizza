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
  sort: string;
};

export const sortList: sortListItem[] = [
  { name: "Popular (up)", sort: "rating" },
  { name: "Popular (down)", sort: "-rating" },
  { name: "Price (up)", sort: "price" },
  { name: "Price (down)", sort: "-price" },
  { name: "Abc (up)", sort: "name" },
  { name: "Abc (down)", sort: "-name" },
];
