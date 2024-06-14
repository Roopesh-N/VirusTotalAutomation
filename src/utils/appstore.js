import { configureStore } from "@reduxjs/toolkit";
import ratingsReducer from "./ratingsSlice";

const appstore=configureStore({

    reducer:{
        domainRatings:ratingsReducer,

    }
})

export default appstore
