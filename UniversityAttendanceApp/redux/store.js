import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/authReducer'
import courseSlice from './reducers/courseReducer'
export default configureStore ({
    reducer:{
        user:userSlice,
        course:courseSlice
    }
})