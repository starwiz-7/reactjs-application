import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';

import styles from './Card.module.css'

const useStyles = makeStyles({
    root: {
        minWidth: 350,
        margin:'2%',
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={styles.card}>
                <div className={styles.title}>
                    Total Organisation
                </div>
                <div className={styles.details}>
                    <div className={styles.stats}>
                        246K
                    </div>
                    <div className={styles.image}>
                        <BarChartOutlinedIcon color='secondary'/>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}