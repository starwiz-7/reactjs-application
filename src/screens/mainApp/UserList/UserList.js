import React from "react";
import styles from "./UserList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Card from "../../../components/UserListCard/UserListCard";

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
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	input: {
		"&::placeholder": {
			color: "#4D4F5C",
			fontSize: "smaller",
		},
	},
}));

export default function UserList() {
	const classes = useStyles();
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;
	return (
		<div className={styles.main}>
			<div className={styles.titleAndSearch}>
				<div className={styles.title}>UserList</div>
				<div className={styles.searchAndButton}>
					<div className={styles.searchBar}>
						<TextField
							id="standard-search"
							size="small"
							type="search"
							style={{
								backgroundColor: "white",
								color: "#4D4F5C",
								paddingTop: "1%",
								paddingBottom: "1%",
							}}
							InputProps={{
								disableUnderline: true,
								startAdornment: icon,
								placeholder: "Search Name...",
								classes: { input: classes.input },
								color: "#4D4F5C",
								focused: classes.focused,
							}}
						/>
					</div>
					<div>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								borderRadius: "17px",
								color: "white",
								height: "50%",
								textTransform: "none",
								outline: "none",
							}}
						>
							Search
						</Button>
					</div>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#0CD241",
							color: "white",
							height: "45px",
							width: "25%",
							alignSelf: "left",
							textTransform: "none",
							outline: "none",
							whiteSpace: "nowrap",
						}}
					>
						Invite User
					</Button>
				</div>
			</div>
			<div className={styles.grid}>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
			</div>
			<div className={styles.paginationDiv}>
				<Pagination variant="outlined" shape="rounded" count={5} />
			</div>
		</div>
	);
}
