import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./Installation.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import expand from "../../../../../../Assets/fullscreen.png";
import TextField from "@material-ui/core/TextField";
import back from "./back.png";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: "21%",
		maxWidth: "21%",
		margin: "2%",
		minHeight: "20%",
		maxHeight: "20%",
	},
	root1: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(2),
		},
	},
	small: {
		width: theme.spacing(2),
		height: theme.spacing(2),
	},
	large: {
		width: theme.spacing(2),
		height: theme.spacing(2),
	},
}));

export function InstallationCard(props) {
	const classes = useStyles();
	return (
		<Card
			body
			outline
			color="black"
			className={classes.root}
			style={{
				borderColor: "white",
				boxShadow: "0px 2px 3px #0000000A",
			}}
		>
			<CardText>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "baseline",
					}}
				>
					<div
						className={styles.header}
						style={{
							marginTop: "0%",
							color: props.color,
							top: "0",
							left: "0",
							fontSize: "xx-large",
						}}
					>
						{props.number}
					</div>
					<div
						className={styles.header}
						style={{
							marginTop: "0%",
							color: props.color,
							marginLeft: "-50%",
							fontSize: "large",
						}}
					>
						{props.minutes}
					</div>
				</div>
				<div
					style={{
						color: "#BBBBBB",
						fontSize: "medium",
						bottom: "0",
						left: "0",
						marginTop: "5%",
					}}
				>
					{props.details}
				</div>
			</CardText>
		</Card>
	);
}

export function Initial(props) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: "2%",
			}}
		>
			<div
				style={{
					backgroundColor: props.color,
					borderRadius: "5px",
					width: "1.5vw",
					height: "1vw",
					marginRight: "1%",
				}}
			></div>
			<span
				style={{
					color: "#4D4F5C",
					whiteSpace: "nowrap",
					fontSize: "small",
					textAlign: "center",
				}}
			>
				{props.info}
			</span>
		</div>
	);
}

export default function Initialisation() {
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
	const normalise = (value) => value / 10;
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>
					<span style={{ fontWeight: "light", color: "#43425D" }}>
						Operations /
					</span>
					<span style={{ fontWeight: "lighter", color: "#BBBBBB" }}>
						Job Reporting
					</span>
				</div>
				<div className={styles.dropdownMain}>
					<FormControl
						variant="outlined"
						style={{ height: "10%", marginRight: "18%" }}
					>
						<InputLabel
							htmlFor="outlined-age-native-simple"
							style={{ alignText: "center" }}
						>
							Initial
						</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
							style={{}}
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
			<div className={styles.header2}>
				<span className={styles.subTitle}>Installation</span>
				<div className={styles.dropdown2}>
					<FormControl variant="outlined">
						<InputLabel
							htmlFor="outlined-age-native-simple"
							style={{ alignText: "center" }}
						>
							Today
						</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
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
				<div className={styles.date}>
					<span className={styles.label}>From Date</span>
					<DatePicker width="80%" />
					<span className={styles.label}>To Date</span>
					<DatePicker width="80%" />
				</div>
			</div>
			<div className={styles.grid}>
				<InstallationCard
					number="500"
					details="Number of assigned properties"
					color="#A5A2FB"
				/>
				<InstallationCard
					number="500"
					details="Number of attempted properties"
					color="#BDD800"
				/>
				<InstallationCard
					number="500"
					details="Average attempt on a property"
					color="#FF9D3A"
				/>
				<InstallationCard
					number="500"
					details="Number of failed properties"
					color="#C50000"
				/>
				<InstallationCard
					number="500"
					details="Number of aborted properties"
					color="#FE0000"
				/>
				<InstallationCard
					number="500"
					details="Number of properties sent back because of audit"
					color="#43425D"
				/>
				<InstallationCard
					number="500"
					details="Number of new properties identified"
					color="#F2134F"
				/>
				<InstallationCard
					number="500"
					minutes="minutes"
					details="Average time spent per property"
					color="#5CC600"
				/>
				<InstallationCard
					number="500"
					minutes="minutes"
					details="Average time between any two properties"
					color="#129A8C"
				/>
				<InstallationCard
					number="500"
					minutes="minutes"
					details="First property installation time"
					color="#B227BC"
				/>
			</div>
			<div className={styles.final}>
				<span
					className={styles.label}
					style={{
						fontWeight: "bold",
						cursor: "pointer",
						fontSize: "large",
					}}
				>
					View Full Details&nbsp;
				</span>
				<img src={back} />
			</div>
			<div className={styles.finale}>
				<img
					src={expand}
					style={{
						marginLeft: "3%",
					}}
				/>
				<span
					style={{
						color: "#F2134F",
						fontSize: "large",
					}}
				>
					TRACKING ACROSS TIME OF THE DAY
				</span>
				<TextField
					id="date"
					variant="filled"
					type="date"
					size="small"
					defaultValue={new Date()}
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					style={{ backgroundColor: "#3B86FF", marginRight: "5%" }}
				/>
			</div>
			<div className={styles.trackingDiv}>
				<Initial
					color="#FFCD54"
					info="Average time spent per property installation per hour of the day"
				/>
				<Initial
					color="#F2134F"
					info="Average installation per user per hour of the day"
				/>
				<Initial
					color="#56BBFE"
					info="Installations per hour of the day"
				/>
				<Initial
					color="#0BD878"
					info="Active user’s per hour of the day"
				/>
				<Initial
					color="#C50000"
					info="Failed property per hour of the day"
				/>
				<Initial
					color="#FE0000"
					info="Aborted property per hour of the day"
				/>
				<Initial
					color="#43425D"
					info="New property added per hour of the day"
				/>
			</div>
		</div>
	);
}
