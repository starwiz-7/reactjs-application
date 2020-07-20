import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import styles from './Language.module.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SEARCH_BUTTON } from '../../../../constants';

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
        justifyContent: 'flex-start',

    },
    table: {
        minWidth: 400,
        borderRadius: 0
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function Language() {
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => setEditModal(!editModal);
    const [deleteModal, setDeleteModal] = useState(false);
    const toggleDeleteModal = () => setDeleteModal(!deleteModal);
    const [check, setCheck] = useState(false);
    const handleChange = () => setCheck(!check);

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <span>Master/</span>
                <span>Language</span>
            </div>
            <div className={styles.tableDiv}>
                <div className={styles.searchBarDiv}>
                    <div className={styles.searchAndDrop}>
                        <div>
                            <div className={styles.searchBar}>
                                <SearchIcon color='disabled' />
                                <TextField id="standard-search" label="Search..." type="search" />
                            </div>
                        </div>
                        <div className={styles.dropDownDiv}>
                            <Button variant="contained" size='medium' style={{ backgroundColor: '#43435d', color: 'white', borderRadius: '20px' }} color='primary'>
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
                            Add Language
                        </Button>
                    </div>
                </div>
                <Modal isOpen={modal} toggle={toggleModal} centered={true}>
                    <ModalHeader toggle={toggleModal}>Add Language</ModalHeader>
                    <ModalBody className={styles.modalContainer}>
                        <form className={classes.root}>
                            <TextField className={classes.root} variant='outlined' label='Language Name' style={{ width: '80%' }} />
                            <TextField className={classes.root} variant='outlined' label='Description' style={{ width: '80%' }} />
                            <FormControlLabel
                                control={<GreenCheckbox checked={check} onChange={handleChange} name="checkedG" />}
                                label="is Active"
                            />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='contained' color="primary" onClick={toggleModal} style={{ marginRight: '2%' }}>Cancel</Button>
                        <Button variant='contained' color="secondary" onClick={toggleModal}>Save</Button>
                    </ModalFooter>
                </Modal>
                <div className={styles.table}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead style={{ backgroundColor: '#F5F6FA' }}>
                                <TableRow>
                                    <TableCell align="left">LANGUAGE NAME</TableCell>
                                    <TableCell align="left">LANGUAGE CODE</TableCell>
                                    <TableCell align="center">STATUS</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left" component="th" scope="row">
                                            English
                                        </TableCell>
                                        <TableCell align="left">EN</TableCell>
                                        <TableCell align="center"><span style={{ color: 'green' }}>ACTIVE</span></TableCell>
                                        <TableCell align="center" className={styles.buttonDivs}>
                                            <IconButton>
                                                <DeleteForeverIcon color='secondary' onClick={toggleDeleteModal} />
                                            </IconButton>
                                            <IconButton onClick={toggleEditModal}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Modal isOpen={editModal} toggle={toggleEditModal} centered={true}>
                        <ModalHeader toggle={toggleEditModal}>Update Language</ModalHeader>
                        <ModalBody className={styles.modalContainer}>
                            <form className={classes.root}>
                                <TextField className={classes.root} variant='outlined' label='Language Name' style={{ width: '80%' }} />
                                <TextField className={classes.root} variant='outlined' label='Description' style={{ width: '80%' }} />
                                <FormControlLabel
                                    control={<GreenCheckbox checked={check} onChange={handleChange} name="checkedG" />}
                                    label="is Active"
                                />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant='contained' color="primary" onClick={toggleEditModal} style={{ marginRight: '2%' }}>Cancel</Button>
                            <Button variant='contained' color="secondary" onClick={toggleEditModal}>Save</Button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={deleteModal} toggle={toggleDeleteModal} centered={true}>
                        <ModalHeader toggle={toggleDeleteModal}>Delete Language</ModalHeader>
                        <ModalBody className={styles.modalContainer}>
                            <Typography>Are you sure ?</Typography>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant='contained' color="primary" onClick={toggleDeleteModal} style={{ marginRight: '2%' }}>Cancel</Button>
                            <Button variant='contained' color="secondary" onClick={toggleDeleteModal}>Delete</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
