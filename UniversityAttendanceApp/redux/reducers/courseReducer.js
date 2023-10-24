import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../config/baseApi";

//user registration 
export const addCourse = createAsyncThunk('addCourse', async(course)=>{
    const response = await baseURL.post('courses',course)
    const { data, headers } = response;
    return { responseData: data, authorization: headers.authorization };
});

export const resetState = createAsyncThunk('reset', async()=>{
    return true
});

const courseSlice = createSlice({
    name:"course",
    initialState:{
        courseInfo:{},
        loading:false,
        success:true,
        errorMessage:"",
        authorization: null // add authorization property to the state
    },
    reducers: {},
    extraReducers:{
        [addCourse.pending]:(state,action)=>{
            state.loading=true
            // state.success =false;

        },
        [addCourse.fulfilled]:(state,action)=>{
            state.loading=false;
            state.success =true;
            state.courseInfo = action.payload.responseData;
            state.authorization = action.payload.authorization; // update authorization value in the state
        },
        [addCourse.rejected]:(state,action)=>{
            state.loading=true
            state.success =false;
            if (action.error.message === 'Request failed with status code 404') {
                console.error('Not found error');
                state.errorMessage = "Something went wrong, please check your network and try again"
            } else if (action.error.code === 'ECONNABORTED') {
                console.error('Timeout error');
                state.errorMessage = "Request timeout. please check your network"
            } else {
                console.error(action.error);
                state.errorMessage = action.error

            }
        },

        [resetState.fulfilled]:(state,action)=>{
            state.courseInfo={},
            state.loading=false,
            state.success=true,
            state.authorization= null
        },
    }

});

export default courseSlice.reducer;
