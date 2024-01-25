import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: OrderState;
}

type OrderState = {
    face: string,
    status: boolean,
    customerName: string,
    price: number,
    dish: Product[],
}

interface Product {
    imgUrl: string;
    title: string;
    weight: string;
    price: string;
    size: number | null;
}

const initialState = {
    value: {
        face: '🙂',
        status: false,
        customerName: 'Choose an order',
        price: 0,
        dish: {}
    } as OrderState,
} as InitialState;

export const order = createSlice({
    name: 'table',
    initialState,
    reducers: {
        orderFood: (state, action: PayloadAction<{face: string, status: boolean, customerName: string, price: number, dish: Product[]}>) => {
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