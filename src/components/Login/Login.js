import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Login.module.css';
import { TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import unnamed from './images/unnamed-6@2x.png';
import path from './images/Path-361.png';
import Logo2x from './images/Logo@2x.png';
import Logo from './images/Logo.png'
import insta from './images/asset-1@2x.png';
import fb from './images/asset-2@2x.png';
import twitter from './images/asset-6@2x.png'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '20em',
            display: 'block',
            ['@media (max-width:320px)']: {
                width:'15em',
            },
            ['@media (min-width:321px) and (max-width:410px)']: {
                width:'18em',
            },
        },
    },
    label: {
        color: "red",
        ['@media (max-width:320px)']: {
            
        },
    }
}));

export default function Login(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAuth(username, password);
    }
    return (
        <Row>
            <Col xs="7" className={styles.left}>
                <div className={styles.left_main}>
                    <picture>
                        <source srcSet={Logo} media="(max-width: 767px)" />
                        <img src={Logo2x} alt="Some picture" />
                    </picture>
                    <div className={styles.login_text}>
                        Login Account
                    </div>
                    <div className={styles.login_desc}>
                        <span>This is a secure system and you will need to</span>
                        <br></br>
                        <span>provide your login details to access the site.</span>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            id="outlined-required"
                            label={<span className={styles.usernamePassowrdLabel}>Username or Phone</span>}
                            variant="outlined"
                            fullWidth={true}
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            id="outlined-password-input"
                            label={<span className={styles.usernamePassowrdLabel}>Password</span>}
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth={true}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <div className={styles.forgotPwdDiv}>
                            <FormControlLabel
                                className={classes.label} control={<Checkbox className={styles.checkBox} checked={checked} onChange={handleChange} name="checkedA" />}
                                label={<span className={styles.checkBoxLabel}>Remember Me</span>}
                            />
                            <div style={{ paddingBottom: '10px' }}>
                                <a href='#' className={styles.forgotPassword}><span>Forgot Password?</span></a>
                            </div>
                        </div>
                        <Button variant="contained" color="secondary" className={styles.button} onClick={handleSubmit}>
                            Sign In
                        </Button>
                    </form>
                    <div style={{ margin: '20px' }}>
                        <span className={styles.signUpText}>Don't have an account?</span> <a href='#' style={{ color: 'red',fontWeight:'500'}}>SIGN UP</a>
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
                                <img src={insta} className={styles.instaImage}/>
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
    )
};