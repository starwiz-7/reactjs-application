import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import styles from './SignUp.module.css';
import { TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.8),
            width: '98%',
            display: 'block',
        },
        '& .MuiFormControlLabel-root': {
            margin: 0
        }
    },
    label: {
        color: "red"
    },
}));

export default function Login(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    return (
        <Row>
            <Col xs="7" className={styles.left}>
                <div className={styles.left_main}>
                    <div className={styles.logo}>
                        <img alt='logo' src={process.env.PUBLIC_URL + '/assets/Logo@2x.png'} />
                    </div>
                    <div className={styles.login_text}>
                        Create Account
                    </div>
                    <div className={styles.login_desc}>
                        <span>Please complete to create your account.</span>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off" style={{ width: "100%", display: 'grid', justifyContent: 'center', padding: '0%' }}>
                        <div className={styles.row1}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>
                        <div className={styles.row2}>
                            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true} />
                        </div>
                        <div className={styles.row2}>
                            <TextField id="outlined-basic" label="E-mail Address" variant="outlined" fullWidth={true} />
                        </div>
                        <div className={styles.row2}>
                            <TextField id="outlined-basic" label="Mobile number" variant="outlined" fullWidth={true} />
                        </div>
                        <div className={styles.row2}>
                            <TextField id="outlined-basic" type='Password' label="Password" variant="outlined" fullWidth={true} />
                        </div>
                        <div className={styles.row2}>
                            <TextField id="outlined-basic" type='Password' label="Confirm Password" variant="outlined" fullWidth={true} />
                        </div>
                        <div>
                            <FormControlLabel
                                className={classes.label} control={<Checkbox checked={checked} onChange={() => {setChecked(!checked)}} name="checkedA" />}
                                label="I agree with terms and conditions"
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '5%' }}>
                            <Button variant="contained" color="secondary" style={{ width: '54ch' }} onClick={() => { }}>
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    <div>
                        Already have an account? <a href='#' style={{color:'red'}}>SIGN IN</a>
                    </div>
                </div>
            </Col>
            <Col xs="5" className={styles.parent}>
                <img src={process.env.PUBLIC_URL + '/assets/unnamed-6@2x.png'} alt='' className={styles.image1} />
                <img src={process.env.PUBLIC_URL + '/assets/Path-361.png'} alt='' className={styles.image2} />
                <div className={styles.links}>
                    <div className={styles.innerlinks}><a href='#' className={styles.link1}>
                        <div style={{ width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/assets/asset-2@2x.png'} />
                        </div>
                    </a>
                    </div>
                    <div className={styles.innerlinks}><a href='#' className={styles.link3}>
                        <div style={{ width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: '5px' }}>
                            <img src={process.env.PUBLIC_URL + '/assets/asset-1@2x.png'} />
                        </div>
                    </a>
                    </div>
                    <div className={styles.innerlinks}><a href='#' className={styles.link3}>
                        <div style={{ width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/assets/asset-6@2x.png'} />
                        </div>
                    </a>
                    </div>
                </div>
            </Col>
        </Row>
    )
};