import React from 'react';
import styles from './Stepper.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import Profile from '../../screens/mainApp/Profile/Profile'
import Avatar from '../../components/ProfileAvatar/ProfileAvatar'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
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
    return ['Basic Details', 'Fill out your address', 'Done'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Basic Details';
        case 1:
            return 'Fill out your address';
        case 2:
            return 'Done';
        default:
            return 'Unknown stepIndex';
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
                <span>Profile</span>
            </div>
            <div className={styles.avatarDiv}>
                <div className={styles.avatar}>
                    <Avatar />
                </div>
                <div style={{textAlign:'center',paddingBottom:'3%'}}>
                    <span style={{fontWeight:'bolder',fontSize:'medium'}}>John Mayers</span>
                </div>
            </div>
            <div className={styles.container}>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Profile formNumber={activeStep}/>
                    <div>
                        {activeStep === steps.length ? (
                            null
                        ) : (
                                <div className={styles.stepperButtons}>
                                    <Button
                                        hidden={activeStep === 0}
                                        variant='contained'
                                        color='primary'
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Previous
                                </Button>
                                    <Button variant="contained" color="secondary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next Step'}
                                    </Button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}