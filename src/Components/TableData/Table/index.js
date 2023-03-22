import * as React from "react";
import Styles from "./styles.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@mui/material";
import {useEffect} from "react";
import {transactionActions} from "../../../actions/getDataTransaction";
import SelectLabels from "../FilterField";


export default function CustomizedTables(props) {
    const dispatch = useDispatch();
    const fullData = useSelector(
        (state) => state.dataTransactionSlice.transactionFullData
    );
    useEffect(() => {
        if (!fullData?.data) {
            dispatch(transactionActions.getTransactionData());
        }
    }, [dispatch, fullData.data]);

    const handleChange = (event) => {
        dispatch(transactionActions.getTransactionData({page: event.target.innerText}));
    };


    const convDate = (dateValue) => {
        const date = new Date(dateValue * 1000); //створюємо об'єкт дати зі значенням 2021-03-17
        const options = {month: 'short', day: 'numeric', year: 'numeric'}; // задаємо опції форматування
        const formattedDate = date.toLocaleDateString('en-US', options); // отримуємо дату у форматі Mar 17, 2021
        const [month, day, year] = formattedDate.split(' '); // розбиваємо дату на складові
        const finalDate = `${month}-${day}-${year}`; // формуємо кінцевий формат дати
        return finalDate.replace(/,/g, ' ')
    }

    return (
        <>
            <SelectLabels/>
            <TableContainer component={Paper} className={Styles.children_table}>
                <Table aria-label="customized table">
                    <TableHead className={Styles.table_header}>
                        <TableRow>
                            <TableCell className={Styles.table_cell}>Block number</TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Transaction ID
                            </TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Sender address
                            </TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Recipient's address
                            </TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Block confirmations
                            </TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Date
                            </TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Value
                            </TableCell>
                            <TableCell className={Styles.table_cell} align="left">
                                Transaction Fee
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fullData?.data && fullData.data.length > 0 && fullData.data.map((rowItem) => {
                            return (
                                <TableRow
                                    key={rowItem?.name}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell
                                        className={Styles.table_th}
                                        component="th"
                                        scope="row"
                                        align="left"
                                    >
                                        {parseInt(rowItem?.block_number.split('0x')[1], 16)}
                                    </TableCell>
                                    <TableCell align="left">
                                        <a
                                            href="https://etherscan.io/"
                                            rel="noreferrer"
                                            target={"_blank"}
                                        >
                                            <div
                                                className={Styles.table_th}
                                                title={rowItem?.hashTransaction}
                                            >
                                                {rowItem?.hashTransaction}
                                            </div>
                                        </a>
                                    </TableCell>
                                    <TableCell className={Styles.table_th} align="left">
                                        <div className={Styles.table_th} title={rowItem?.from}>
                                            {rowItem?.from}
                                        </div>
                                    </TableCell>
                                    <TableCell className={Styles.table_th} align="left">
                                        <div className={Styles.table_th} title={rowItem?.to}>
                                            {rowItem?.to}
                                        </div>
                                    </TableCell>
                                    <TableCell className={Styles.table_th} align="left">
                                        {rowItem?.confirmations}
                                    </TableCell>
                                    <TableCell className={Styles.table_th} align="left">
                                        {
                                            convDate(parseInt(rowItem?.timestamp.split('0x')[1], 16))
                                        }
                                    </TableCell>
                                    <TableCell className={Styles.table_th} align="left">
                                        {parseInt(rowItem?.value.split('0x')[1], 16)}
                                    </TableCell>
                                    <TableCell className={Styles.table_th} align="left">
                                        {(parseInt(rowItem?.gasUsed.split('0x')[1], 16)) + (parseInt(rowItem?.gasUsed.split('0x')[1], 16))}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                className={Styles.table_pagination}
                color="primary"
                // page = { page }
                count={fullData.total < 14 ? 1 : fullData.total}
                onChange={handleChange}
                shape="rounded"
            />
        </>
    );
}
