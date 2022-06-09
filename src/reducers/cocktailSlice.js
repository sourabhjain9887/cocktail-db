import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cocktails: [],
  loading: true,
};

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    addCocktails: (state, { payload }) => {
      state.cocktails = payload;
    },
    loader: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { addCocktails, loader } = cocktailSlice.actions;
export const getAllCocktails = (state) => state.cocktails.cocktails;
export const getLoader = (state) => state.cocktails.loading;

export default cocktailSlice.reducer;

// // import { NAV_OPEN, FETCH_DATA_FROM_API } from "../Actions/allActions";
// export const SEARCH_COCKTAILS = "SEARCH_COCKTAILS";
// let initialState = {
//   cocktailData: {},
// };
// const testReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case SEARCH_COCKTAILS:
//       return {
//         ...state,
//         cocktailData: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export { testReducer };
