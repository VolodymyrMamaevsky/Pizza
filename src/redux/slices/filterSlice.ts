import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  NAME_DESC = "name",
  NAME_ASC = "-name",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type sortProp = {
  name: string;
  sort: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sortProp: sortProp;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sortProp: {
    name: "Popular(DESC)",
    sort: SortPropertyEnum.RATING_DESC,
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<sortProp>) {
      state.sortProp = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sortProp = action.payload.sortProp;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const sortSelector = (state: RootState) => state.filter.sortProp;
export const filterSelector = (state: RootState) => state.filter;

export const {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
