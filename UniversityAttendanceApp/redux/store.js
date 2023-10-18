import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/authReducer'

export default configureStore ({
    reducer:{
        user:userSlice
    }
})