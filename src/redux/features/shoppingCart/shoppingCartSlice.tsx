import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: any[],
  // quantityProducts: number,
  // price?: number
}

const initialState: CartState = {
  items: [],
  // quantityProducts: 1,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<number>) {
      state.items.push(action.payload)
    },
    // incrementQuantity: (state, action: PayloadAction<any>) => {
    //   const updatedQuantity = state.quantityProducts += 1
      
    //   if(updatedQuantity >= 2){
    //     const updatePrice = action.payload * updatedQuantity
    //     state.price = updatePrice
    //   }
    // }, 
    // decrementQuantity: (state, action: PayloadAction<any>) => {
    //   if(state.quantityProducts >= 2){
    //     state.quantityProducts -=1
    //     const updatePrice = action.payload * state.quantityProducts
    //     console.log("eu sou " + updatePrice);
        
    //     let newPrice = state.price = updatePrice
    //     console.log("aaaa " + newPrice);
        
    //   }
    // },
  }
})

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer


// const handleButtonPlus = () => {
//   const updatedQuantity = quantity + 1;
//   setQuantity(updatedQuantity);

//   if (updatedQuantity >= 2) {
//       const updatedPrice = price * updatedQuantity
//       setTotalPrice(updatedPrice)
//   }
// }

// const handleButtonMinus = () => {
//   if (quantity > 1) {
//       const updatedQuantity = quantity - 1;
//       setQuantity(updatedQuantity);
//       const updatedPrice = price * updatedQuantity
//       setTotalPrice(updatedPrice);
//   }
// }