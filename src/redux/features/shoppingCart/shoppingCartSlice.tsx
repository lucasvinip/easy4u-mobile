import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: any[],
  qty: number
  // price?: number
}

const initialState: CartState = {
  items: [],
  qty: 0
  // quantityProducts: 1,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<number>) {
      state.items.push(action.payload)
      state.qty += 1
    },
    incrementItem(state, action: PayloadAction<{ productId: number }>) {
      const item = state.items.find(item => item.id === action.payload.productId);

      if (item) {
        item.quantity += 1;
        state.qty += 1;
      }
    },
    decrementItem(state) {
      if (state.qty > 1) {
        state.qty -= 1
      }

    }
  }
})

export const { addCartItem, incrementItem, decrementItem } = cartSlice.actions

export default cartSlice.reducer
