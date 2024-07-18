import { createSlice } from "@reduxjs/toolkit";

let CartSlice=createSlice({
name:'cart',
initialState:[],
reducers:{
    add(state,action)
    {
        state.push(action.payload)
    },
    remove(state,action){
        let rmv=state.filter((item)=>item.id !== action.payload)
        return rmv
    },
    increment(state,action){
        let item=state.find((item)=>item.id === action.payload)
        if(item){
            item.quantity+=1
        }
    },
    decrement(state,action){
        let item=state.find((item)=>item.id === action.payload)
        if(item && item.quantity >1){

            item.quantity-=1
        }
    }
}
})
export let{add,remove,increment,decrement}=CartSlice.actions
export default CartSlice.reducer