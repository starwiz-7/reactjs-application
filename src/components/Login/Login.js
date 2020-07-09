import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import styles from './Login.module.css';
import { TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../../store/actions/index';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50ch',
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
                        <img alt='logo' src={process.env.PUBLIC_URL + '/assets/Logo@2x.png'} />
                    </div>
                    <div className={styles.login_text}>
                        Login Account
                    </div>
                    <div className={styles.login_desc}>
                        <span>This is a secure system and you will need to</span>
                        <br></br>
                        <span>provide your login details to access the site.</span>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off" style={{ width: "500px", display: 'grid', justifyContent: 'center' }}>
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
                            <div style={{ paddingBottom: '10px', paddingRight: '40px' }}>
                                <a href='#' style={{ color: 'red' }}>Forgot Password?</a>
                            </div>
                        </div>
                        <div style={{ width: '500px', padding: "15px" }}>
                            <Button variant="contained" color="secondary" style={{ width: '54ch' }} onClick={handleSubmit}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                    <div style={{ margin: '20px' }}>
                        Don't have an account? <a href='#' style={{ color: 'red' }}>SIGN UP</a>
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) =>
            dispatch(actions.auth(username, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};