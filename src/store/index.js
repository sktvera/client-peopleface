import { configureStore } from "@reduxjs/toolkit";
//Reducers
import questions from "./slices/questions";

export default configureStore({
    reducer: {
        questions
    }
})