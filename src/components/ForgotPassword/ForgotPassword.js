import React from 'react'
import styles from './ForgotPassword.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
        '& .MuiIcon-colorSecondary': {
            width: '2em',
            height: '2em'
        }
    },
}));

export default function ForgotPassword() {
    const classes = useStyles();
    return (
        <div style={{ width: '100vw', height: '100vh', objectFit: 'fit', overflow: 'hidden', position: 'absolute', top: '0', left: '0' }}>
            <img src={process.env.PUBLIC_URL + '/assets/unnamed@2x.png'} style={{ width: '100%' }} alt='background'/>
            <div className={styles.div1}>
                <div className={styles.logoDiv}>
                    <img src={process.env.PUBLIC_URL + '/assets/Logo-1@2x.png'} alt='logo'/>
                </div>
                <div className={styles.div1text}>
                    Forgot Password
                </div>
                <div className={styles.description}>
                    <span>Please enter the email address you use</span>
                    <br></br>
                    <span>when creating your account,we'll send you</span>
                    <br></br>
                    <span>instructions to reset password.</span>
                </div>
                <div className={styles.textField}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    </form>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '5%' }}>
                    <Button variant="contained" color="secondary" style={{ width: '43ch' }} onClick={() => { }}>
                        Send
                    </Button>
                </div>
                <div style={{ paddingLeft: '20%', paddingTop: '5%' }}>
                    Don't have an account?<a href='#' style={{ color: 'red' }}>SIGN UP</a>
                </div>
            </div>
        </div>
    )
}
