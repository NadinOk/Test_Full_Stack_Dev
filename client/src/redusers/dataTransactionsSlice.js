import {createSlice} from '@reduxjs/toolkit';

export const dataTransactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactionFullData: {},
    },
    reducers: {
        setTransactionFullData: (state, action) => {
            state.transactionFullData = action.payload;
        }
    },
});

export const {
    setTransactionFullData
} = dataTransactionSlice.actions;

export default dataTransactionSlice.reducer;
