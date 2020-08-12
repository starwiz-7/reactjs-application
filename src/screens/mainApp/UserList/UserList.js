import React from "react";
import styles from "./UserList.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Card from "../../../components/UserListCard/UserListCard";

export default function UserList() {
	return (
		<div className={styles.main}>
			<div className={styles.titleAndSearch}>
				<div className={styles.title}>UserList</div>
				<div className={styles.searchAndButton}>
					<div className={styles.searchBar}>
						<SearchIcon
							fontSize="large"
							style={{ color: "#BCBCCB" }}
						/>
						<TextField
							id="standard-basic"
							placeholder="Search name.."
							InputProps={{ disableUnderline: true }}
						/>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								borderRadius: "17px",
								color: "white",
								height: "50%",
								textTransform: "none",
								width: "30%",
								marginLeft: "30%",
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
			<Pagination
				variant="outlined"
				shape="rounded"
				count={5}
				style={{ marginLeft: "75%" }}
			/>
		</div>
	);
}
