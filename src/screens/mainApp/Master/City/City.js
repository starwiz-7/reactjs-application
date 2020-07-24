import React, { useState } from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Label,
	Form,
	FormGroup,
} from "reactstrap";
import styles from "../State/State.module.css";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";

import CityTable from "../../../../components/CityTable/CityTable";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch",
		},
		"& .MuiPagination-root": {
			margin: theme.spacing(3),
			color: "standard",
		},
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
}));

const Searchstyles = makeStyles((theme) => ({
	underline: {
		"&&&:before": {
			borderBottom: "none",
		},
		"&&&:after": {
			borderBottom: "none",
		},
	},
}));
const GreenCheckbox = withStyles({
	root: {
		color: "green",
		"&$checked": {
			color: "green",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Language() {
	const classes = useStyles();
	const textclass = Searchstyles();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	const [check, setCheck] = useState(false);
	const handleChange = () => setCheck(!check);

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light" }}>Master /</span>
				<span style={{ fontWeight: "light", color: "#43425D" }}>
					City
				</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.searchAndDrop}>
						<div>
							<div className={styles.searchBar}>
								<SearchIcon />
								<TextField
									id="standard-search"
									label="Search..."
									type="search"
									InputProps={{ disableUnderline: true }}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Button
								variant="contained"
								style={{
									backgroundColor: "#4d4f5c",
									color: "white",
									borderRadius: "20px",
									textTransform: "none",
									width: "35%",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<Dropdown isOpen={dropdownOpen} toggle={toggle}>
							<DropdownToggle
								caret
								style={{
									backgroundColor: "white",
									color: "#4D4F5C",
									borderColor: "#D7DAE2",
									textAlign: "left",
									width: "130%",
								}}
							>
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
						<Button
							variant="contained"
							color="secondary"
							onClick={toggleModal}
							style={{
								fontSize: "14px",
								width: "50%",
								textTransform: "none",
								textAlign: "center",
							}}
						>
							Add new city
						</Button>
					</div>
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalHeader toggle={toggleModal}>Add State</ModalHeader>
					<ModalBody className={styles.modalContainer}>
						<form className={classes.root}>
							<TextField
								className={classes.root}
								variant="outlined"
								label="State Name"
								style={{ width: "80%" }}
							/>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button
							variant="contained"
							color="primary"
							onClick={toggleModal}
							style={{ marginRight: "2%" }}
						>
							Cancel
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={toggleModal}
						>
							Save
						</Button>
					</ModalFooter>
				</Modal>
				<div className={styles.table}>
					<CityTable />
				</div>

				<div className={classes.root}></div>
			</div>
			<Pagination
				count={5}
				shape="rounded"
				color="primary"
				variant="outlined"
				style={{
					color: "blue",
					marginLeft: "78%",
					marginTop: "2%",
				}}
			/>
		</div>
	);
}
