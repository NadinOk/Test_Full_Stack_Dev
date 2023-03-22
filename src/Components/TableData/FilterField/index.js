import {useState} from "react";
import {useDispatch} from "react-redux";
import Styles from "./styles.module.scss";
import {MenuItem, TextField} from "@mui/material";
import searchIcon from "../../../images/search.svg";
import {transactionActions} from "../../../actions/getDataTransaction";

const currencies = [
    {
        value: "block_number",
        label: "Block number",
    },
    {
        value: "hashTransaction",
        label: "Transaction ID",
    },
    {
        value: "from",
        label: "Sender address",
    },
    {
        value: "to",
        label: "Recipient's address",
    },
];

const SelectLabels = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState("");
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        if (event.target.name === 'search') {
            setSearch(event.target.value);
        } else {
            setFilters(event.target.value);
        }

    };

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(transactionActions.getTransactionData({[filters]: search.trim()}));
    };


    return (
        <form>
            <div className={Styles.wrapper}>
                <div className={Styles.container}>
                    <TextField
                        id="search"
                        className={Styles.field}
                        onChange={handleChange}
                        placeholder={"Search..."}
                        name="search"
                        value={search}

                    />
                    <TextField
                        className={Styles.field}
                        value={filters}
                        select
                        onChange={handleChange}
                        name={"select"}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <button
                    className={Styles.submitBtn}
                    type="submit"
                    onClick={handleClick}
                    disabled={filters === ''}
                >
                    <img src={searchIcon} alt="search"/>
                </button>
            </div>
        </form>
    );
};

export default SelectLabels;
