import axios from 'axios'

export const transactionApi = {
    getTransactionData: async (data) => {
        return axios({
            method: 'get',
            url: `https://test-full-stack-dev-nadinok.onrender.com/api/transaction_info`,
            params: data,
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}