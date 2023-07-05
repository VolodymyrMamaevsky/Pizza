import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sortProp: {
    name: "Popular (up)",
    sort: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    SetFilters(state, action) {
      state.sortProp = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
    setSortType(state, action) {
      state.sortProp = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage, SetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
