import { createSlice } from "@reduxjs/toolkit";

/**
 * Slices are where you defien the initial state and the actions you can apply to that state
 */

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        //action
        increment(state){
            state.value++
        },
        decrement(state){
            state.value--
        }
    }
})

export const counterActions = counterSlice.actions;