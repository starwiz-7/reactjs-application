import React from 'react'
import styles from './Profile.module.css'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50em',
        },
    },
}));



export default function Profile(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
    });

    const [checkState, setCheckState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleCheckChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const forms = [
        (
            <>
                <div className={styles.row1}>
                    <TextField id="outlined-basic" size='small' label={<span className={styles.label}>First Name</span>} variant="outlined" style={{ width: '45%' }} />
                    <TextField id="outlined-basic" size='small' label={<span className={styles.label}>Last name</span>} variant="outlined" style={{ width: '45%' }} />
                </div>
                <div className={styles.row1}>
                    <TextField id="outlined-basic" label={<span className={styles.label}>Username</span>} variant="outlined" size='small' style={{ width: '45%' }} />
                    <TextField id="outlined-basic" label={<span className={styles.label}>E-mail address</span>} variant="outlined" size='small' style={{ width: '45%' }} />
                </div>
                <div className={styles.row1}>
                    <TextField id="outlined-basic" label={<span className={styles.label}>Phone number</span>} variant="outlined" size='small' style={{ width: '45%' }} />
                    <TextField id="outlined-basic" label={<span className={styles.label}>Emergency phone number</span>} variant="outlined" size='small' style={{ width: '45%' }} />
                </div>
                <div className={styles.row1}>
                    <FormControl variant="outlined" className={classes.formControl} size='small' style={{ width: '45%' }}>
                        <InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>Blood Group</span>}</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="Blood Group"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" size='small' className={classes.formControl} style={{ width: '45%' }}>
                        <InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>Preffered Language</span>}</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="Preffered Language"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </div>
            </>
        ),
        (
            <>
                <div className={styles.row1}>
                    <TextField id="outlined-basic" label={<span className={styles.label}>Address</span>} variant="outlined" size='normal' style={{ width: '100%' }} />
                </div>
                <div className={styles.row1}>
                    <FormControl variant="outlined" size='small' className={classes.formControl} style={{ width: '45%' }}>
                        <InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>Country</span>}</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="Country"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" size='small' className={classes.formControl} style={{ width: '45%' }}>
                        <InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>State</span>}</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="State"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.row1}>
                    <FormControl variant="outlined" size='small' className={classes.formControl} style={{ width: '45%' }}>
                        <InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>City</span>}</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="City"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic" label={<span className={styles.label}>Postal Code</span>} variant="outlined" size='small' style={{ width: '45%' }} />
                </div>
            </>
        ),
        (
            <>
                <div className={styles.row1} style={{justifyContent:'center'}}>
                    <span className={styles.lastFormElement}>Review the change and Submit!</span>
                </div>
            </>
        )
    ]
    return (
        <div className={styles.formDiv}>
            <form className={classes.root} noValidate autoComplete="off">
                {forms[props.formNumber]}
            </form>
        </div>
    )
}

