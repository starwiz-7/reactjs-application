import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
		borderRadius: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

export default function SimpleTable({ togglingModal }) {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead style={{ backgroundColor: "#F5F6FA" }}>
					<TableRow>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							Username
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							Module
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							Date
						</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell
							align="center"
							style={{ color: "#A3A6B4" }}
						></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell
								align="left"
								style={{ color: "#4D4F5C" }}
							>
								User
							</TableCell>
							<TableCell
								align="left"
								style={{ color: "#4D4F5C" }}
							>
								DemoModule
							</TableCell>
							<TableCell
								align="left"
								style={{ color: "#4D4F5C" }}
							>
								00-00-0000
							</TableCell>
							<TableCell align="left"></TableCell>
							<TableCell align="left"></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell align="left">
								<span
									style={{
										cursor: "pointer",
										color: "#3B86FF",
									}}
									onClick={() => togglingModal(true)}
								>
									Give Access
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
