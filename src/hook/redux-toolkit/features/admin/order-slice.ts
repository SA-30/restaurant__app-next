import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: OrderState;
}

type OrderState = {
    face: string,
    status: string,
    customerName: string,
    price: number,
    dish: string[],
}

const initialState = {
    value: {
        face: '🍓',
        status: '...',
        customerName: 'Choose an order',
        price: 0,
        dish: ['dishItem'],
    } as OrderState,
} as InitialState;

export const order = createSlice({
    name: 'table',
    initialState,
    reducers: {
        orderFood: (state, action: PayloadAction<{face: string, status: string, customerName: string, price: number, dish: string[]}>) => {
            const {face, status, customerName,price, dish} = action.payload;

            state.value.face = face;
            state.value.status = status;
            state.value.customerName = customerName;
            state.value.price = price;
            state.value.dish = dish;
        },
    },
});

export const {orderFood} = order.actions;
export default order.reducer;