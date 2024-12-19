import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
};


const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement }= carouselSlice.actions;
export default carouselSlice.reducer;
