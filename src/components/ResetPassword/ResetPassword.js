import React from 'react'
import styles from './ResetPassword.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button} from '@material-ui/core';
import unnamed from './images/unnamed@2x.png';
import Logo from './images/Logo-1@2x.png'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '40ch',
            display:'grid'
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
            <img src={unnamed} style={{ width: '100%' }} />
            <div className={styles.div1}>
                <div className={styles.logoDiv}>
                    <img src={Logo} alt='logo'/>
                </div>
                <div className={styles.div1text}>
                    Reset Your Password
                </div>
                <div className={styles.textField}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" type='Password' label="New password" variant="outlined" />
                        <TextField id="outlined-basic" type='Password' label="Confirm your new password" variant="outlined" fullWidth={true} />
                    </form>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '5%' }}>
                    <Button variant="contained" color="secondary" style={{ width: '43ch' }} onClick={() => { }}>
                        Reset My Password
                    </Button>
                </div>
            </div>
        </div>
    )
}
