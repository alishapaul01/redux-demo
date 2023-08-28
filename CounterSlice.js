import { createSlice } from '@reduxjs/toolkit';


const initialState= {counter:0, showCounter: true}
const counterSlice= createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increase(state,action) {
            state.counter += action.payload
        },
        decrease(state, action) {
            state.counter= state.counter - action.payload
        },
        toggleCounter(state) {
            state.showCounter= !state.showCounter
        }
    }
})

export const counterActions= counterSlice.actions;
export default counterSlice.reducer;