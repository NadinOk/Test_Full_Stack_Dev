import {configureStore} from '@reduxjs/toolkit';
import transactions from "../redusers/dataTransactionsSlice";

export default configureStore({
    reducer: {
        dataTransactionSlice: transactions,
    },
});
