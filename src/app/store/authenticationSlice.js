import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import agent from '../api/agent';

export const registerUser = createAsyncThunk(
  'api/registerUser', 
  async (userDetail,thunkAPI) => 
  {
    try{
      const response = await agent.Account.register(userDetail);
      return response.data;
    }
    catch(error)
    {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  });



const initialState={
    loading:false,
    error:null,
    user:null
}

export const authenticationSlice=createSlice({
    name:"authentication",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      }

});

export default authenticationSlice.reducer;

