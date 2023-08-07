import { RootState } from "../store";

export const sortSelector = (state: RootState) => state.filter.sortProp;
export const filterSelector = (state: RootState) => state.filter;
