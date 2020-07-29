import React, { useState } from "react";
import styles from "./Attendance.module.css";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import DatePicker from "../../../components/DatePicker/DatePicker";
import Table from "../../../components/Table/Table";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function OrganisationSamadhanID() {
	const classes = useStyles();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light" }}>Attendance</span>
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
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Dropdown isOpen={dropdownOpen} toggle={toggle}>
								<DropdownToggle
									caret
									style={{
										backgroundColor: "white",
										color: "grey",
									}}
								>
									User
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
							<DatePicker />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#21034B",
									color: "white",
									borderRadius: "20px",
								}}
							>
								Search
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.table}>
					<Table />
				</div>
			</div>
		</div>
	);
}
