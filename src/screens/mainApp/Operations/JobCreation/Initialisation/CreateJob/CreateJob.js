import React from "react";
import styles from "./CreateJob.module.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "100%",
		},
	},
}));

export default function CreateJob() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	const handleCheckChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light", color: "#43425D" }}>
					Operations/ Job Creation / Initialisation /
				</span>
				<span style={{ fontWeight: "light", color: "#BBBBBB" }}>
					&nbsp;Create Job
				</span>
			</div>
			<div className={styles.container}>
				<div className={styles.row2}>
					<TextField
						id="outlined-basic"
						label={<span className={styles.label}>Title</span>}
						variant="outlined"
						size="normal"
						style={{ width: "80%" }}
					/>
				</div>
				<div className={styles.row2}>
					<TextField
						id="outlined-basic"
						label={
							<span className={styles.label}>Description</span>
						}
						variant="outlined"
						multiline={true}
						rows="5"
						rowsMax="10"
						style={{ width: "80%" }}
					/>
				</div>
				<div style={{ flexDirection: "column" }}>
					<div className={styles.row1}>
						<span className={styles.label}>Start Date</span>
						<DatePicker style={{ marginLeft: "0%" }} />
						<span className={styles.label}>Start Date</span>
						<DatePicker />
					</div>
				</div>
				<div className={styles.row2}>
					<TextField
						id="outlined-basic"
						label="No. of NFC tags"
						variant="outlined"
						size="normal"
						style={{ width: "80%" }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						padding: "2% 10%",
					}}
				>
					<FormControl variant="outlined">
						<InputLabel
							htmlFor="outlined-age-native-simple"
							style={{
								alignText: "center",
								whiteSpace: "nowrap",
							}}
						>
							Selection of associate
						</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
							style={{
								width: "inherit",
								maxHeight: "80%",
								width: "800%", //Change this as it is not responsive
								marginBottom: "5%",
								float: "left",
							}}
							label="Selection of associate"
							inputProps={{
								name: "Selection of associate",
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
				<div classname={styles.row2}>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#43425D",
							color: "white",
							textTransform: "none",
							fontWeight: "lighter",
							borderRadius: "5px",
							marginLeft: "69%",
							width: "10%",
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#F2134F",
							color: "white",
							textTransform: "none",
							fontWeight: "lighter",
							borderRadius: "5px",
							width: "10%",
							marginLeft: "2%",
						}}
					>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
}
