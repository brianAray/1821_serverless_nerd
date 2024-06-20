/**
 * 
 * What is Redux?
 *  - Redux is a dependency that can manage global state
 *  - Since react is unidirectional (components start from the parent and data goes downwards) having global state can be beneficial
 * 
 *  Redux utilizies the flux design pattern
 *      - How it works
 *          - There is a central store somewhere that holds the global application state
 *          - Views can dispatch an action to the store to manipulate teh state
 *          - When the state gets manipulated, teh view will automatically update
 * 
 * Store?
 *  - A store is a state that holds the global application state
 * 
 * View?
 *  - The components
 * 
 * Action?
 *  - Functions that are predefined to manipulate the state
 * 
 * Dispatcher?
 *  - Delivers teh action to the store
 *  - Need to dispatch action to the store so it can be manipulated
 */

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default store;