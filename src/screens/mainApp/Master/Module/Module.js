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
import styles from "./Module.module.css";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";
import classNames from "classnames";
import PropTypes from "prop-types";
import ModuleTable from "../../../../components/ModuleTable/ModuleTable";

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
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const [state, setState] = React.useState({
		age: "",
	});
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	const [check, setCheck] = useState(false);
	const handleChange = () => setCheck(!check);

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "bolder" }}>Master /</span>
				<span style={{ fontWeight: "lighter", color: "gray" }}>
					Module List
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
									backgroundColor: "#43425d",
									color: "white",
									borderRadius: "20px",
									opacity: "1",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<Button
							variant="contained"
							// color="secondary"
							style={{
								backgroundColor: "#f2134f",
								color: "white",
								width: "30%",
							}}
							onClick={toggleModal}
						>
							Add
						</Button>
					</div>
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalHeader toggle={toggleModal}>Add Module</ModalHeader>
					<ModalBody className={styles.modalContainer}>
						<form className={classes.root}>
							<FormControl
								variant="outlined"
								className={classes.root}
								style={{ width: "80%" }}
							>
								<InputLabel htmlFor="outlined-age-native-simple">
									{
										<span className={styles.label}>
											Module
										</span>
									}
								</InputLabel>
								<Select
									native
									value={state.age}
									onChange={handleChange}
									label="Module"
									inputProps={{
										name: "age",
										id: "outlined-age-native-simple",
									}}
								>
									<option aria-label="None" value="" />
									<option value={10}>Ten</option>
									<option value={20}>Twenty</option>
									<option value={30}>Thirty</option>
								</Select>
							</FormControl>
							<TextField
								className={classes.root}
								variant="outlined"
								label="Module name"
								style={{ width: "80%" }}
							/>
							<FormControlLabel
								control={
									<GreenCheckbox
										checked={check}
										onChange={handleChange}
										name="checkedG"
									/>
								}
								label="is Active"
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
					<ModuleTable />
				</div>
				<div className={classes.root}>
					<Pagination
						count={5}
						shape="rounded"
						color="primary"
						variant="outlined"
						style={{
							color: "blue",
							marginLeft: "75%",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
