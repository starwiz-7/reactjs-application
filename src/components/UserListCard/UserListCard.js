import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import AntSwitch from '../AntSwitch/AntSwitch'

import styles from './UserListCard.module.css'

const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 400,
        margin: '2%',
    },
    root1: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={styles.card}>
                <div className={styles.detailsDiv}>
                    <div className={styles.avatarDiv}>
                        <div className={classes.root1}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                        </div>
                    </div>
                    <div className={styles.textdetailsDiv}>
                        <div style={{ fontWeight: 'bolder' }}>David James</div>
                        <div style={{ fontWeight: 'lighter' }}>United States</div>
                        <div style={{ fontWeight: 'lighter' }}>8715674877</div>
                    </div>
                </div>
                <div className={styles.switchDiv}>
                    <AntSwitch />
                </div>
            </CardContent>
        </Card>
    );
}