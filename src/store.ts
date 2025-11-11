import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./redux/Product/productsSlice";
import cartReducer from "./redux/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
