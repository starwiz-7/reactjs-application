import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import styles from "./JobReportingCard.module.css";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 255,
		margin: "2%",
		maxHeight: 90,
	},
	root1: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(2),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const JobCard = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader>1234</CardHeader>
			<CardContent className={styles.card}>
				<div className={styles.detailsDiv}>
					<div className={styles.avatarDiv}>
						<div className={classes.root1}></div>
					</div>
					<div style={{ marginTop: "-4%" }}>{props.details}</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default JobCard;
