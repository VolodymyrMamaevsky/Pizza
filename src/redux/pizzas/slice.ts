import { FetchPizzasArguments, Pizza, Status, PizzaState } from "./types";
import axios from "axios";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params: FetchPizzasArguments) => {
    const { categoryId, sortProp, order, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://6454c0bbf803f34576304938.mockapi.io/items?page=${currentPage}&limit=4&${categoryId}&sortBy=${sortProp}&order=${order}${search}`
    );

    return data as Pizza[];
  }
);

const initialState: PizzaState = {
  items: [],
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
