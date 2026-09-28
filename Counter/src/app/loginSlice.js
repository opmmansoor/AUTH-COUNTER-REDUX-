import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers: {
        loggedIn: (state) => {
            return !state;
        },
        loggedOut: (state) => {
            return !state
        },
    }
})
export const {loggedIn,loggedOut} = loginSlice.actions;

export default loginSlice.reducer;