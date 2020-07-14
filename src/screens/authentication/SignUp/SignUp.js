import React, { useState } from 'react';
import { Container } from 'reactstrap'
import { Row, Col } from 'reactstrap';
import styles from './SignUp.module.css';
import { TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import unnamed from './images/unnamed-6@2x.png';
import path from './images/Path-361.png';
import Logo2x from './images/Logo@2x.png';
import Logo from './images/Logo.png';
import insta from './images/asset-1@2x.png';
import fb from './images/asset-2@2x.png';
import twitter from './images/asset-6@2x.png'


const useStyles = makeStyles((theme) => ({
    root1: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            display: 'flex',
            ['@media (min-width:426px) and (max-width:767px)']: {
                width: '9.5em',
            },
            ['@media (min-width:376px) and (max-width:425px)']: {
                width: '9.5em',
            },
            ['@media (min-width: 320px) and (max-width: 375px)']: {
                width: '8.6em'
            },
            ['@media (min-width: 768px) and (max-width: 1023px)']: {
                width: '12em'
            },
            ['@media (min-width:1024px) and (max-width:1439px)']: {
                width: '14.5em'
            },
            ['@media (min-width:1440px) and (max-width:2559px)']: {
                width: '14.6em'
            },
            ['@media (min-width:2560)']: {
                width: '14.6em'
            }
        }
    },
    root2: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            display: 'block',
            ['@media (min-width: 320px) and (max-width: 375px)']: {
                width: '18em'
            },
            ['@media (min-width:376px) and (max-width:425px)']: {
                width: '20em',
            },
            ['@media (min-width:426px) and (max-width:767px)']: {
                width: '20em',
            },
            ['@media (min-width: 768px) and (max-width: 1023px)']: {
                width: '25em'
            },
            ['@media (min-width:1024px) and (max-width:1439px)']: {
                width: '30em'
            },
            ['@media (min-width:1440px) and (max-width:2559px)']: {
                width: '30em'
            }
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
        <div>
            <Container fluid={true}>
                <Row>
                    <Col xs="7" className={styles.left}>
                        <div className={styles.left_main}>
                            <picture>
                                <source srcSet={Logo} media="(max-width: 767px)" />
                                <img src={Logo2x} alt="Some picture" />
                            </picture>
                            <div className={styles.signUp_text}>
                                Create Account
                    </div>
                            <div className={styles.signUp_desc}>
                                <span>Please complete to create your account.</span>
                            </div>
                            <form className={classes.root1} Validate autoComplete="off">
                                <div className={styles.row1}>
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                </div>
                            </form>
                            <form className={classes.root2} Validate autoComplete="off" style={{ width: "100%", display: 'grid', justifyContent: 'center', padding: '0%' }}>
                                <div className={styles.row2}>
                                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true} />
                                </div>
                                <div className={styles.row2}>
                                    <TextField id="outlined-basic" type='email' label="E-mail Address" variant="outlined" fullWidth={true} />
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
                                <div className={styles.termsCondition}>
                                    <FormControlLabel
                                        className={classes.label} control={<Checkbox checked={checked} onChange={() => { setChecked(!checked) }} name="checkedA" />}
                                        label="I agree with terms and conditions"
                                    />
                                </div>
                            </form>
                            <div className={styles.buttonDiv}>
                                <Button variant="contained" color="secondary" style={{ width: '54ch' }} onClick={() => { }}>
                                    Sign Up
                            </Button>
                            </div>
                            <div className={styles.signInDiv}>
                                Already have an account? <a href='#' style={{ color: 'red' }}><span style={{ fontWeight: '500' }}>SIGN IN</span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs="5" className={styles.parent}>
                        <img src={unnamed} alt='' className={styles.image1} />
                        <img src={path} alt='' className={styles.image2} />
                        <div className={styles.links}>
                            <div className={styles.innerLinks}>
                                <a href='#'>
                                    <div className={styles.linksDiv1}>
                                        <img src={fb} />
                                    </div>
                                </a>
                                <a href='#'>
                                    <div className={styles.linksDiv2}>
                                        <img src={insta} className={styles.instaImage} />
                                    </div>
                                </a>
                                <a href='#'>
                                    <div className={styles.linksDiv1}>
                                        <img src={twitter} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};