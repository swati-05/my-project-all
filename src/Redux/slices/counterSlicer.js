import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 0,
    loading: false
}


const counterSlicer = createSlice({
    name: 'counterName',
    initialState,
    reducers: {
        counterStart: (state, { payload }) => {
            state.count = payload
        },
        counterFun: (state, { payload }) => {
            state.loading = true
            state.count = payload
        },
        success: (state, { payload }) => {
            state.loading = false
        }

    }
});
export default counterSlicer.reducer;

export const { counterFun, success, counterStart } = counterSlicer.actions;