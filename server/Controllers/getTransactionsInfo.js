import getTransactionsInfoServices from "../services/getTransactionsInfoServices.js";
import {verifyHash} from "../Helpers/verifyHash.js";
import getBlockServices from "../services/getBlockServices.js";


export const getTransactionsInfo = async (req, res) => {
    if (verifyHash(req.query) === true) {
        const lastBlock = await getBlockServices();
        await getTransactionsInfoServices(req.query)
            .then((response) => {
                if (response.docs.length !== 0) {
                    const data = response.docs.map(item => {
                        return {
                            ...item._doc,
                            confirmations: parseInt(lastBlock.block_number, 16) - parseInt(item.block_number, 16)
                        }
                    })
                    const results = {total: response.totalDocs, data: data}
                    res.status(200).json(results)
                } else {
                    res.status(404).json('Object not found')
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            });
    }
}

