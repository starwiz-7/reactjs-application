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
						<SearchIcon fontSize="large" />
						<TextField
							id="standard-basic"
							label="Search user..."
							InputProps={{ disableUnderline: true }}
						/>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								borderRadius: "17px",
								color: "white",
								fontSize: "15px",
								height: "38px",
								width: "108px",
							}}
						>
							{" "}
							Search
						</Button>
					</div>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#50c878",
							color: "white",
							height: "45px",
							width: "164px",
							alignSelf: "left",
						}}
					>
						Invite User
					</Button>
				</div>
			</div>
			<div className={styles.grid}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination
				variant="outlined"
				shape="rounded"
				count={5}
				style={{ marginLeft: "70%" }}
			/>
		</div>
	);
}
