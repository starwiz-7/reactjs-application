import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
}));

export default function DatePickers(props) {
	const classes = useStyles();

	return (
		<form className={classes.container} noValidate>
			<TextField
				id="date"
				variant="outlined"
				type="date"
				size="small"
				defaultValue={new Date()}
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
				style={{ width: props.width }}
			/>
		</form>
	);
}
