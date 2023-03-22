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
                .catch(() => {
                    alert(`Opps something went wrong... The transaction ID must start with 0x and have 66 characters after it sender and recipient addresses must start with 0x and have 40 characters after`)
                })
        } catch (error) {
            console.log('getTransactionData', error)
        }
    }
}