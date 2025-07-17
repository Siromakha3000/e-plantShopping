import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const item = state.items
                .find((item) => action.payload.name === item.name);
            if (item) {
                item.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const item = state.items
                .find((item) => action.payload.name === item.name);
            if (item.quantity <= 1) {
                state.items.pop(item);
            } else {
                item.quantity--;
            }
        },
        updateQuantity: (state, action) => {
            const item = state.items
                .find((item) => action.payload.name === item.name);
            if (item) {
                item.quantity = action.payload.quantity;
                if (item.quantity <= 0) {
                    state.items.pop(item);
                }
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
