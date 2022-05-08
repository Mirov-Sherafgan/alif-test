import { configureStore } from '@reduxjs/toolkit'
import post from "./post/post";

export const store = configureStore({
    reducer: {
        post
    },
})
