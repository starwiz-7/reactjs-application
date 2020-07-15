import React, { useState } from 'react'
import styles from './BlankSamadhanID.module.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


import Table from '../../../../components/Table/Table'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
        },
    },
}));

export default function OrganisationSamadhanID() {
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <span style={{ fontWeight: 'bolder' }}>Samadhan ID /</span>
                <span style={{ fontWeight: 'lighter', color: 'gray' }}> Blank Samadhan ID</span>
            </div>
            <div className={styles.tableDiv}>
                <div className={styles.searchBarDiv}>
                    <div>
                        <div className={styles.searchBar}>
                            <SearchIcon />
                            <TextField id="standard-search" label="Search..." type="search" />
                        </div>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary">
                            Add
                        </Button>
                    </div>
                </div>
                <div className={styles.table}>
                    <Table />
                </div>
            </div>
        </div>
    )
}
