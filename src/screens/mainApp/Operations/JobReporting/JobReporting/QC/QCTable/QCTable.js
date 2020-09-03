import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./QCTable.module.css";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import DatePicker from "../../../../../../../components/DatePicker/DatePicker";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


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
		root1: {
			flexGrow: 1,
			maxHeight: "60%",
		},
		table: {
			minWidth: 650,
			borderRadius: 0,
			overflowY: "auto",
			overflowX: "auto",
			maxHeight: 10,
			overflow: "scroll",
		},
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
}));
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	const [check, setCheck] = useState(false);
	const [text_enabled, text_disabled, text2_disabled] = useState(true);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>
					Operations/ Job Reporting /
				</span>
				<span style={{ fontWeight: "lighter", color: "#BBBBBB" }}>
					QC
				</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.searchAndDrop}>
						<div>
							<div className={styles.searchBarDiv}>
								<TextField
									id="standard-search"
									size="small"
									type="search"
									variant="outlined"
									style={{
										borderColor: "#F5F6FA",
										borderRadius: "4px",
										marginBottom: "5%",
										width: "60%",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search..",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
								<FormControl
									variant="outlined"
									style={{ marginLeft: "1%", height: "30%" }}
								>
									<InputLabel
										htmlFor="outlined-age-native-simple"
										style={{
											alignText: "center",
										}}
									>
										Filter
									</InputLabel>
									<Select
										native
										value={state.age}
										onChange={handleChange}
										style={{
											maxHeight: "40%",
											marginBottom: "5%",
										}}
										label="Filter"
										inputProps={{
											name: "Filter",
											id: "outlined-age-native-simple",
										}}
									>
										<option aria-label="None" value="" />
										<option value={10}>Ten</option>
										<option value={20}>Twenty</option>
										<option value={30}>Thirty</option>
									</Select>
								</FormControl>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",

									textTransform: "none",
									width: "45%",
									fontWeight: "lighter",
									height: "70%",
									marginBottom: "3%",
									marginLeft: "5%",
									marginRight: "5%",
								}}
							>
								Search
							</Button>
							<FormControl variant="outlined">
								<InputLabel
									htmlFor="outlined-age-native-simple"
									style={{ alignText: "center" }}
								>
									Week
								</InputLabel>
								<Select
									native
									value={state.age}
									onChange={handleChange}
									style={{
										maxHeight: "80%",
										marginBottom: "5%",
									}}
									label="Filter"
									inputProps={{
										name: "Filter",
										id: "outlined-age-native-simple",
									}}
								>
									<option aria-label="None" value="" />
									<option value={10}>Ten</option>
									<option value={20}>Twenty</option>
									<option value={30}>Thirty</option>
								</Select>
							</FormControl>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<span
							style={{
								textAlign: "center",
								fontSize: "large",
							}}
						>
							From Date
						</span>
						<DatePicker width="70%" />
						<span
							style={{
								textAlign: "center",
								fontSize: "large",
								alignItems: "baseline",
								justifyContent: "baseline",
							}}
						>
							To Date
						</span>
						<DatePicker width="70%" />
						<Button
							variant="contained"
							onClick={toggleModal}
							style={{
								textTransform: "none",
								textAlign: "center",
								// height: "95%",
								marginBottom: "1%",
								backgroundColor: "#3B86FF",
								color: "white",
							}}
						>
							Download
						</Button>
					</div>
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalHeader toggle={toggleModal}>Add City</ModalHeader>
					<ModalBody className={styles.modalContainer}>
						<form className={classes.root}>
							<TextField
								className={classes.root}
								variant="outlined"
								label="Country Name"
								style={{ width: "80%" }}
								onChange={(text) =>
									text_enabled(!text.target.value)
								}
							/>
							<TextField
								className={classes.root}
								variant="outlined"
								label="State Name"
								style={{ width: "80%" }}
								disabled={text_disabled}
								onChange={(text) =>
									text_disabled(!text.target.value)
								}
							/>
							<TextField
								className={classes.root}
								variant="outlined"
								label="City Name"
								style={{ width: "80%" }}
								disabled={text2_disabled}
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
					<div style={{ overflow: "auto" }}>
						<Table aria-label="simple table">
							<TableHead
								style={{
									backgroundColor: "#F5F6FA",
									position: "sticky",
									top: "0",
								}}
							>
								<TableRow>
									<TableCell
										align="left"
										style={{
											textAlign: "justify",
											color: "#A3A6B4",
										}}
									>
										S.NO
									</TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										Number of QC jobs created
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										Number of cards completed in QC
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										Number of initialisations needed
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										Number of Un-installations needed
									</TableCell>
								</TableRow>
							</TableHead>
						</Table>
						<div style={{ overflow: "auto", height: "20vw" }}>
							<Table
								aria-label="simple table"
								className={classes.table}
								style={{ tableLayout: "fixed" }}
							>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.name}>
											<TableCell
												align="left"
												component="th"
												scope="row"
												style={{
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												1
											</TableCell>
											<TableCell
												align="left"
												component="th"
												scope="row"
												style={{
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												250
											</TableCell>
											<TableCell
												align="left"
												component="th"
												scope="row"
												style={{
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												250
											</TableCell>
											<TableCell
												align="left"
												component="th"
												scope="row"
												style={{
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												250
											</TableCell>
											<TableCell
												align="left"
												component="th"
												scope="row"
												style={{
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												250
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>

				<div className={classes.root}></div>
			</div>
			<Pagination
				count={5}
				shape="rounded"
				color="primary"
				variant="outlined"
				style={{
					marginTop: "2%",
					marginLeft: "78%",
				}}
			/>
		</div>
	);
}
