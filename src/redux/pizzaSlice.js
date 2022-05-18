// Este fichero representa datos en nuestra store

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: [],
  gluten: false,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
  },
});

// Actions
export const { toggleGluten, addTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
