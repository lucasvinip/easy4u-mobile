import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: any[],
  quantityProducts: number,
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  quantityProducts: 1,
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<number>) {
      state.items.push(action.payload)
    },
    handleButtonMinus(state, action: PayloadAction<number>) {
      if (state.quantityProducts > 1) {
        state.quantityProducts -= 1;
        state.totalPrice = state.quantityProducts * action.payload
      }
    },
    handleButtonPlus(state, action: PayloadAction<number>) {
      state.quantityProducts += 1;
      state.totalPrice = state.quantityProducts * action.payload
    },
  }
})

export const { addCartItem, handleButtonMinus, handleButtonPlus } = cartSlice.actions

export default cartSlice.reducer
