import React from "react";
import styles from "./UploadProperty.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GetAppIcon from "@material-ui/icons/GetApp";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import download from "./download.png";
import upload from "./upload.png";

const useStyles = makeStyles((theme) => ({}));

export default function AddProperty() {
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
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>Property List /</span>
				<span style={{ color: "#a9a9a9", fontWeight: "lighter" }}>
					&nbsp;Upload Property
				</span>
			</div>
			<div className={styles.formDiv}>
				<form noValidate autoComplete="off">
					<div className={styles.row1}>
						<FormControl
							variant="outlined"
							style={{
								width: "40%",
								alignContent: "center",
								marginRight: "50%",
							}}
						>
							<InputLabel
								htmlFor="outlined-age-native-simple"
								style={{
									top: "0",
								}}
							>
								Category
							</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange}
								style={{
									width: "160%",
									alignSelf: "left",
								}}
								label="Status"
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
					<div className={styles.row1}>
						<FormControl
							variant="outlined"
							style={{
								width: "40%",
								alignContent: "center",
								marginRight: "50%",
							}}
						>
							<InputLabel
								htmlFor="outlined-age-native-simple"
								style={{
									top: "0",
								}}
							>
								Sub category
							</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange}
								style={{
									width: "160%",
									alignSelf: "left",
								}}
								label="Status"
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
					<div className={styles.row1}>
						<Button
							variant="outlined"
							style={{
								color: "#3B86FF",
								borderColor: "#3B86FF",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
								marginRight: "60%",
								width: "30%",
								padding: "1%",
							}}
						>
							<span
								style={{
									alignSelf: "left",
									marginRight: "15%",
									textTransform: "none",
									whiteSpace: "nowrap",
								}}
							>
								Download Template
							</span>
							<div style={{ marginLeft: "5%" }}>
								<img src={download} />
							</div>
						</Button>
					</div>
					<div className={styles.innerDiv}>
						<img
							src={upload}
							style={{
								alignSelf: "center",
								paddingTop: "10%",
								paddingBottom: "4%",
							}}
						/>
						<span
							style={{
								color: "#4D4F5C",
								textAlign: "center",
								opacity: "50%",
							}}
						>
							Drag and drop a file here
						</span>
						<span
							style={{
								color: "#4D4F5C",
								textAlign: "center",
								opacity: "50%",
								padding: "2%",
							}}
						>
							or
						</span>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#3B86FF",
								color: "white",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
								// width: "30%",
								alignSelf: "center",
								marginBottom: "10%",
							}}
						>
							Choose File
						</Button>
					</div>
				</form>
				<div className={styles.buttonDiv}>
					<div className={styles.buttons}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								color: "white",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
							}}
						>
							Cancel
						</Button>
					</div>
					<div className={styles.buttons}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
