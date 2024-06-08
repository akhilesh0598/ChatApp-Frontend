import { createSlice } from '@reduxjs/toolkit';

const initialState={
    token:localStorage.getItem('jwt')||null,
    error:'',
    appLoaded:false
}

export const authenticationSlice=createSlice({
    name:"common",
    initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload
        },
        setAppLoaded:(state,action)=>{
            state.appLoaded=true;
        }
    }
});

export default authenticationSlice.reducer;

export const {login,logout}=authenticationSlice.actions;

