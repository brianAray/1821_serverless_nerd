import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        password: ""
    },
    reducers: {
        setUser(state, param){
            state.username = param.payload.username;
            state.password = param.payload.password;
        }
    }
})

export const userActions = userSlice.actions