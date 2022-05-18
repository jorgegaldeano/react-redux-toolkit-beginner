// Este fichero es como el index.js, no necesitaremos tocarlo generalmente

import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});
