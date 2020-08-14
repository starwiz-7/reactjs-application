import React from "react";
import PropTypes from "prop-types";
import styles from "./OrganisationMain.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import edit from "../../../../Assets/edit.png";
import Dropdown from "../../../../components/Select/Select";
import SearchIcon from "@material-ui/icons/Search";
import CountryTable from "../../../../components/CountryTable/CountryTable";
//Inventory
import InventoryTable from "../../../../components/InventoryTable/InventoryTable";

//Account
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #e8e8e8",
	},
	indicator: {
		backgroundColor: "#3B86FF",
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(4),
		outline: "none",
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:hover": {
			color: "#43425D",
			opacity: 1,
			outline: "none",
		},
		"&$selected": {
			color: "#43425D",
			fontWeight: theme.typography.fontWeightMedium,
			outline: "none",
		},
		"&:focus": {
			color: "#43425D",
			outline: "none",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	table: {
		minWidth: 650,
		borderRadius: 0,
	},
}));

export function Organisation() {
	return (
		<div className={styles.organisationDiv}>
			<div className={styles.organisationFormDiv}>
				<span
					style={{
						color: "#707070",
						fontSize: "large",
						marginLeft: "3%",
						marginTop: "3%",
						marginBottom: "5%",
						fontSize: "22px",
					}}
				>
					Organisation Profile
				</span>
				<div className={styles.formRowDiv}>
					<span
						style={{
							color: "#43425D",
							paddingBottom: "2%",
						}}
					>
						Organisation display name
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Email (will be public)
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Description
					</span>
					<TextField
						variant="outlined"
						style={{
							width: "90%",
							outline: "none",
						}}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						URL
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Location
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Billing email (Private)
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Gravatar email (Private)
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
			</div>
			<div className={styles.organisationProfileDiv}>
				<span
					style={{
						color: "#707070",
						fontSize: "large",
						font: "Source Sans Pro",
						fontWeight: "bold",
					}}
				>
					Profile Picture
				</span>
				<div className={styles.container}>
					<div className={styles.circle}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chapultepec_Zoo_-_Jaguar_%2802%29.jpg/2560px-Chapultepec_Zoo_-_Jaguar_%2802%29.jpg" />
					</div>
				</div>
				<Button
					variant="filled"
					style={{
						backgroundColor: "#3B86FF",
						color: "white",
						textAlign: "center",
						height: "4em",
						marginTop: "5%",
						font: "Semibold Source Sans Pro",
					}}
				>
					Upload new Picture
				</Button>
			</div>
		</div>
	);
}

export function People() {
	return (
		<div>
			<div></div>
		</div>
	);
}

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

export function Inventory() {
	const classes = useStyles();

	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;
	return (
		<div>
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
										border: "1px solid #F5F6FA",
										borderRadius: "4px",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search...",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Dropdown holder="User" />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									textTransform: "none",
									backgroundColor: "#43425D",
									width: "40%",
									marginLeft: "2%",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonDiv}>
						<Button
							variant="contained"
							color="secondary"
							style={{
								backgroundColor: "#F2134F",
								textTransform: "none",
								width: "100%",
							}}
						>
							Add
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<InventoryTable />
				</div>
			</div>
		</div>
	);
}

export function Billing() {
	return (
		<div className={styles.billingFormDiv}>
			<span
				style={{
					color: "#707070",
					fontSize: "large",
					marginLeft: "3%",
					marginTop: "3%",
					marginBottom: "5%",
					fontSize: "22px",
				}}
			>
				Billing
			</span>
			<div className={styles.formRowDiv}>
				<span
					style={{
						color: "#43425D",
						paddingBottom: "2%",
					}}
				>
					Billing name
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Billing email
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
		</div>
	);
}

export function Account() {
	const classes = useStyles();
	return (
		<div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead style={{ backgroundColor: "#F5F6FA" }}>
						<TableRow>
							<TableCell
								align="left"
								style={{
									textAlign: "left",
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								ORGANISATION NAME
							</TableCell>
							<TableCell
								align="left"
								style={{
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								AMOUNT PAID
							</TableCell>
							<TableCell
								align="left"
								style={{
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								PROPERTY NUMBER
							</TableCell>
							<TableCell
								align="left"
								style={{
									textAlign: "left",
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								TAX TYPE
							</TableCell>
							<TableCell
								align="left"
								style={{
									textAlign: "left",
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								TYPE OF PAYMENT
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Dhule Organisation
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="center"
									style={{
										textAlign: "left",
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									1000
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="center"
									style={{
										textAlign: "left",
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									78546
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Property Tax
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Cash
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
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

export function Settings() {
	return (
		<div className={styles.billingFormDiv}>
			<span
				style={{
					color: "#707070",
					fontSize: "large",
					marginLeft: "3%",
					marginTop: "3%",
					marginBottom: "5%",
					fontSize: "22px",
				}}
			>
				Settings
			</span>
			<div className={styles.formRowDiv}>
				<span
					style={{
						color: "#43425D",
						paddingBottom: "2%",
					}}
				>
					Organization display name
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Sub domain name
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Description
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					URL
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Location
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
		</div>
	);
}
export default function Main() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Dhule Organisation</span>
			</div>
			<div className={styles.tabsDiv}>
				<div className={classes.root}>
					<div>
						<AntTabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="auto"
							aria-label="ant example"
							centered={true}
						>
							<AntTab label="ORGANISATION" />
							<AntTab label="PEOPLE" />
							<AntTab label="TEAMS" />
							<AntTab label="MODULES" />
							<AntTab label="INVENTORY" />
							<AntTab label="ACCOUNT" />
							<AntTab label="SECURITY" />
							<AntTab label="SETTINGS" />
							<AntTab label="BILLING" />
							<AntTab label="" disabled={true} />
							<AntTab label="" disabled={true} />
						</AntTabs>
						<TabPanel value={value} index={0}>
							<Organisation />
						</TabPanel>
						<TabPanel value={value} index={4}>
							<Inventory />
						</TabPanel>
						<TabPanel value={value} index={8}>
							<Billing />
						</TabPanel>
						<TabPanel value={value} index={5}>
							<Account />
						</TabPanel>
						<TabPanel value={value} index={7}>
							<Settings />
						</TabPanel>
					</div>
				</div>
			</div>
		</div>
	);
}
