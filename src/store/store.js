import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
