import { createSlice } from "@reduxjs/toolkit";


export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questionsList: {},
    },
    reducers: {
        setQuestionsList: (state, action) => {
            state.questionsList = action.payload
        },
    }
})

export const { setQuestionsList, setActiveQuestion } = questionsSlice.actions

export default questionsSlice.reducer

