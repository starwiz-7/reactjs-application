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
						>
							<AntTab label="ORGANISATION" />
							<AntTab label="PEOPLE" />
							<AntTab label="TEAMS" />
							<AntTab label="MODULES" />
							<AntTab label="INVENTORY" />
							<AntTab label="ACCOUNT" />
							<AntTab label="SECURITY" />
							<AntTab label="SETTINGS" />
							<AntTab label="APPLICATIONS" />
							<AntTab label="DATA" />
							<AntTab label="BILLING" />
						</AntTabs>
						<TabPanel value={value} index={0}>
							<Organisation />
						</TabPanel>
					</div>
				</div>
			</div>
		</div>
	);
}
