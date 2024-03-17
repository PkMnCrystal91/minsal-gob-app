import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        stock: action.payload.stock,
      });
    },
    deleteProduct: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = inventorySlice.actions;
