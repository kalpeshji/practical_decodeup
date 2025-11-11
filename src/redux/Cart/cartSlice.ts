import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const res = await axios.get(`${API_URL}/cart`);
  return res.data;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ productId, quantity }: any) => {
    await axios.post(`${API_URL}/cart`, { productId, quantity });
    const res = await axios.get(`${API_URL}/cart`);
    return res.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (id: number) => {
    await axios.delete(`${API_URL}/cart/${id}`);
    const res = await axios.get(`${API_URL}/cart`);
    return res.data;
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }: { id: number; quantity: number }) => {
    await axios.patch(`${API_URL}/cart/${id}`, { quantity });
    const res = await axios.get(`${API_URL}/cart`);
    return res.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalCount: 0, totalPrice: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) =>
      Object.assign(state, action.payload)
    );
    builder.addCase(addToCart.fulfilled, (state, action) =>
      Object.assign(state, action.payload)
    );
    builder.addCase(removeFromCart.fulfilled, (state, action) =>
      Object.assign(state, action.payload)
    );
    builder.addCase(updateCartQuantity.fulfilled, (state, action) =>
      Object.assign(state, action.payload)
    );
  },
});

export default cartSlice.reducer;
