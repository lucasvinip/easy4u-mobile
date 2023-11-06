import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: any[],
}

const initialState: CartState = {
  items: [],
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<number>) {
      state.items.push(action.payload)    
    }

  }
})

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
