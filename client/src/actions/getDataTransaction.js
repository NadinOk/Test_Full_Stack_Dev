import {transactionApi} from "../api/transactionApi";
import {setTransactionFullData} from "../redusers/dataTransactionsSlice";

export const transactionActions = {
    getTransactionData: (data) => (dispatch) => {
        try {
            transactionApi
                .getTransactionData(data)
                .then((res) => {
                    dispatch(setTransactionFullData(res.data))
                })
                .catch((error) => {
                    console.log('profileApi getTransactionData', error)
                })
        } catch (error) {
            console.log('getTransactionData', error)
        }
    }
}