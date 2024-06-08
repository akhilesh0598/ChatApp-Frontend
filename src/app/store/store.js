import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './authenticationSlice';
import commonSlice from './commonSlice';


const store =configureStore({

    reducer:{
        authentication:authenticationSlice,
        common:commonSlice
    }

})

export default store;