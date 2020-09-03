import React, { useState } from "react";
import styles from "./QC.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import InitialisationTable from "../../../../../components/JobCreationTables/InitialisationTable/InitialisationTable";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .Mui-focused": {
			borderColor: "#F5F6FA",
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch",
		},
		"& .MuiPagination-root": {
			margin: theme.spacing(3),
			color: "standard",
		},
		focused: {
			borderColor: "#F5F6FA",
		},
		input: {
			"&::placeholder": {
				color: "#4D4F5C",
			},
		},
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
}));

export default function Language() {
	const classes = useStyles();
	const [check, setCheck] = useState(false);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Operations / Job Creation /</span>
				<span style={{ color: "#BBBBBB" }}>&nbsp;QC</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.searchAndDrop}>
						<div>
							<div className={styles.searchBar}>
								<TextField
									id="standard-search"
									size="small"
									type="search"
									variant="outlined"
									style={{
										borderColor: "#F5F6FA",
										borderRadius: "4px",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search..",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
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
									outline: "none",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {}}
							style={{
								textTransform: "none",
								textAlign: "center",
								// width: "60%",
								alignSelf: "right",
								marginLeft: "48%",
								outline: "none",
								whiteSpace: "nowrap",
							}}
						>
							Create new job
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<InitialisationTable />
				</div>

				<div className={classes.root}></div>
			</div>
			<div className={styles.paginationDiv}>
				<Pagination
					count={5}
					shape="rounded"
					color="primary"
					variant="outlined"
				/>
			</div>
		</div>
	);
}
