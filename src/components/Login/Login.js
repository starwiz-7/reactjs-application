import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Login.module.css';
import { TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import unnamed from './images/unnamed-6@2x.png';
import path from './images/Path-361.png';
import Logo from './images/Logo@2x.png';
import insta from './images/asset-1@2x.png';
import fb from './images/asset-2@2x.png';
import twitter from './images/asset-6@2x.png'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '20em',
            display: 'block',
        },
    },
    label: {
        color: "red"
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
                    <div className={styles.logo}>
                        <img alt='logo' src={Logo} />
                    </div>
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
                            label="Username or phone"
                            variant="outlined"
                            fullWidth={true}
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth={true}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px', alignItems: 'center' }}>
                            <FormControlLabel
                                className={classes.label} control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                                label="Remember me"
                            />
                            <div style={{ paddingBottom: '10px' }}>
                                <a href='#' style={{ color: 'red' }}>Forgot Password?</a>
                            </div>
                        </div>
                        <Button variant="contained" color="secondary" style={{ width: '85%' }} onClick={handleSubmit}>
                            Sign In
                        </Button>
                    </form>
                    <div style={{ margin: '20px' }}>
                        Don't have an account? <a href='#' style={{ color: 'red' }}>SIGN UP</a>
                    </div>
                </div>
            </Col>
            <Col xs="5" className={styles.parent}>
                <img src={unnamed} alt='' className={styles.image1} />
                <img src={path} alt='' className={styles.image2} />
                <div className={styles.links}>
                    <div className={styles.innerLinks}>
                        <a href='#'>
                            <div style={{ width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <img src={fb} />
                            </div>
                        </a>
                        <a href='#'>
                            <div style={{ width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: '5px' }}>
                                <img src={insta} />
                            </div>
                        </a>
                        <a href='#'>
                            <div style={{ width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <img src={twitter} />
                            </div>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    )
};