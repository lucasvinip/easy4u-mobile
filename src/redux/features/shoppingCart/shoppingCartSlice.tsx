import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductProps {
  id: number;
  name: any;
  price: number;
  photo: string;
  productType: string;
  quantity: number;
}

export interface CartState {
  items: ProductProps[];
  qty: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  qty: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<ProductProps>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.qty += 1;
      state.total = state.items.reduce((total, item) => {
        const upadetePrice = item.price.toString().replace(/[^\d.,]/g, '').replace(',', '.')
        return total + Number(upadetePrice) * item.quantity
      }, 0);

    },
    incrementItem(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);

      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        state.qty += 1;

        state.total = state.items.reduce((total, item) => {
          const upadetePrice = item.price.toString().replace(/[^\d.,]/g, '').replace(',', '.')
          return total + Number(upadetePrice) * item.quantity
        }, 0);
      }
    },
    decrementItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);

      if (itemIndex !== -1) {
        const currentItem = state.items[itemIndex];
        currentItem.quantity = Math.max((currentItem.quantity || 0) - 1, 0);

        if (currentItem.quantity === 0) {
          state.items.splice(itemIndex, 1);
        }

        state.qty = Math.max(state.qty - 1, 0);

        state.total = state.items.reduce((total, item) => {
          const upadetePrice = item.price.toString().replace(/[^\d.,]/g, '').replace(',', '.')
          return total + Number(upadetePrice) * item.quantity
        }, 0);
        
      }
    },

  },
});

export const { addCartItem, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
