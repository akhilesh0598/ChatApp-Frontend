import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:{
        name:'akhilesh'
    }
}

export const authenticationSlice=createSlice({
    name:"authentication",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
        },
        logout:(state,action)=>{
            state.user=null;
        }
    }

});

export default authenticationSlice.reducer;

export const {login,logout}=authenticationSlice.actions;

