import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import styles from './Country.module.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import Table from '../../../../components/Table/Table'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
}));

const GreenCheckbox = withStyles({
    root: {
        color: 'green',
        '&$checked': {
            color: 'green',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function Language() {
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const [check, setCheck] = useState(false);
    const handleChange = () => setCheck(!check)

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <span style={{ fontWeight: 'bolder' }}>Master /</span>
                <span style={{ fontWeight: 'lighter', color: 'gray' }}>Country</span>
            </div>
            <div className={styles.tableDiv}>
                <div className={styles.searchBarDiv}>
                    <div className={styles.searchAndDrop}>
                        <div>
                            <div className={styles.searchBar}>
                                <SearchIcon />
                                <TextField id="standard-search" label="Search..." type="search" />
                            </div>
                        </div>
                        <div className={styles.dropDownDiv}>
                            <Button variant="contained" style={{ backgroundColor: '#21034B', color: 'white', borderRadius: '20px' }}>
                                Search
                        </Button>
                        </div>
                    </div>
                    <div className={styles.buttonAndFilter}>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret style={{ backgroundColor: 'white', color: 'grey' }}>
                                Filter
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Actions</DropdownItem>
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Foo Action</DropdownItem>
                                <DropdownItem>Bar Action</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Button variant="contained" color="secondary" onClick={toggleModal}>
                            Add new country
                        </Button>
                    </div>
                </div>
                <Modal isOpen={modal} toggle={toggleModal} centered={true}>
                    <ModalHeader toggle={toggleModal}>Add Country</ModalHeader>
                    <ModalBody className={styles.modalContainer}>
                        <form className={classes.root}>
                            <TextField className={classes.root} variant='outlined' label='Country Name' style={{ width: '80%' }} />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='contained' color="primary" onClick={toggleModal} style={{ marginRight: '2%' }}>Cancel</Button>
                        <Button variant='contained' color="secondary" onClick={toggleModal}>Save</Button>
                    </ModalFooter>
                </Modal>
                <div className={styles.table}>
                    <Table />
                </div>
            </div>
        </div>
    )
}
