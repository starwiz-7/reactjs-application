import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		borderRadius: 0,
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SimpleTable1() {
	const classes = useStyles();

	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead style={{ backgroundColor: "#F5F6FA" }}>
					<TableRow>
						<TableCell
							align="left"
							style={{ textAlign: "left", color: "#A3A6B4" }}
						>
							PACKAGE
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							NO. OF FRESH CARDS
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							NO. OF FAILED
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							NO. OF DAMAGE CARDS
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							SCREW
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							SCREW DRIVER
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							DRILL GUN
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							WOOD PLUGS
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							JOB SHEETS
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							QUANTITIES
						</TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
					</TableRow>
				</TableHead>
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
								USER
							</TableCell>
							<TableCell>1000</TableCell>
							<TableCell>1000</TableCell>
							<TableCell>50</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>

							<TableCell align="justify" padding="checkbox">
								<DeleteForeverIcon
									style={{
										padding: "none",
									}}
								/>
							</TableCell>
							<TableCell align="left" padding="checkbox">
								<EditIcon
									style={{
										color: "#f2134f",
									}}
									onClick={toggleModal}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
