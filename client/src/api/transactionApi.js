import axios from 'axios'

export const transactionApi = {
    getTransactionData: async (data) => {
        return axios({
            method: 'get',
            url: `http://localhost:8080/api/transaction_info`,
            params: data,
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}