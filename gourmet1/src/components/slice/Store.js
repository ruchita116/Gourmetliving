import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/Cartslice"

let Store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default Store