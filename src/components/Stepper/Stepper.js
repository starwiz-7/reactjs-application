import React from "react";
import styles from "./Stepper.module.css";

import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AddOrganisation from "../../screens/mainApp/Organisation/AddOrganisation/AddOrganisation";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		color: "#3B86FF",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return ["Basic Details", "Add Head", "Modules and Permissions", "Done"];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return "Basic Details";
		case 1:
			return "Add Head";
		case 2:
			return "Modules and Permissions";
		case 3:
			return "Done";
		default:
			return "Unknown stepIndex";
	}
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Add Organisation</span>
			</div>
			<div className={styles.container}>
				<div className={classes.root}>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label} style={{ color: "#3B86FF" }}>
								<StepLabel
									StepIconProps={{ iconColor: "#3B86FF" }}
								>
									{label}
								</StepLabel>
							</Step>
						))}
					</Stepper>
					<AddOrganisation formNumber={activeStep} />
					<div>
						{activeStep === steps.length ? null : (
							<div className={styles.stepperButtons}>
								<Button
									hidden={activeStep === 0}
									variant="contained"
									color="primary"
									onClick={handleBack}
									style={{
										backgroundColor: "#43425D",
										outline: "none",
									}}
									className={classes.backButton}
								>
									Previous
								</Button>
								<Button
									variant="contained"
									style={{
										backgroundColor: "#F2134F",
										color: "white",
										outline: "none",
									}}
									onClick={handleNext}
								>
									{activeStep === steps.length - 1
										? "Submit"
										: "Next Step"}
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
