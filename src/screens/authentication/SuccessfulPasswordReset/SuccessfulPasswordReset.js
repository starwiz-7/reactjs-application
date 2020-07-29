import React from "react";
import styles from "./SuccessfulPasswordReset.module.css";
import { Button } from "@material-ui/core";
import unnamed from "./images/unnamed@2x.png";
import Logo from "./images/Logo-1@2x.png";
import { Link } from "react-router-dom";
import history from "../../../history";

export default function ForgotPassword() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				objectFit: "fit",
				overflow: "hidden",
				position: "absolute",
				top: "0",
				left: "0",
			}}
			className={styles.background}
		>
			<div className={styles.div1}>
				<div className={styles.logoDiv}>
					<img src={Logo} alt="logo" />
				</div>
				<div className={styles.div1text}>
					Successful password reset!
				</div>
				<div className={styles.description}>
					<span>You can now use your new password</span>
					<br></br>
					<span>to sign in to your account.</span>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						padding: "5%",
					}}
				>
					<Button
						variant="contained"
						style={{
							width: "43ch",
							backgroundColor: "#F2134F",
							color: "white",
							height: "56px",
							outline: "none",
						}}
						className={styles.btn}
						href="/login"
						onClick={() => {}}
					>
						Sign In
					</Button>
				</div>
			</div>
		</div>
	);
}
