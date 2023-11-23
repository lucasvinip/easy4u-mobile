import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductProps {
  id: number,
  name: string,
  price: number,
  photo: string,
  quantity: number,
  preparationTime: number | undefined
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

      state.total = state.items.reduce((total, item) => {
        const price = item.price || 0
        const upadetePrice = price.toString().replace(/[^\d.,]/g, '').replace(',', '.');
        return total + Number(upadetePrice) * item.quantity;
      }, 0)
    },
    orderAgain(state, action: PayloadAction<any>) {
      action.payload.map((item: any) => {
        const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.items.push({ ...item });
        }

        state.total = state.items.reduce((total, item) => {
          const price = item.price || 0
          console.log("aaa ß" + item.price);
          
          const upadetePrice = price.toString().replace(/[^\d.,]/g, '').replace(',', '.');
          return total + Number(upadetePrice) * item.quantity;
        }, 0)

      });
    },

    incrementItem(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);

      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        state.qty += 1;

        state.total = state.items.reduce((total, item) => {
          const price = item.price || 0
          const upadetePrice = price.toString().replace(/[^\d.,]/g, '').replace(',', '.');
          return total + Number(upadetePrice) * item.quantity;
        }, 0)

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
          const price = item.price || 0
          const upadetePrice = price.toString().replace(/[^\d.,]/g, '').replace(',', '.');
          return total + Number(upadetePrice) * item.quantity;
        }, 0)

      }
    },
    clearCart(state) {
      state.items = [];
      state.qty = 0;
      state.total = 0;
    },

  },
});

export const {
  addCartItem,
  orderAgain,
  incrementItem,
  decrementItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
