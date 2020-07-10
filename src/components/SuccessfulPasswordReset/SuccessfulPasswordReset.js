import React from 'react'
import styles from './SuccessfulPasswordReset.module.css'
import { Button } from '@material-ui/core';

export default function ForgotPassword() {
    return (
        <div style={{ width: '100vw', height: '100vh', objectFit: 'fit', overflow: 'hidden', position: 'absolute', top: '0', left: '0' }}>
            <img src={process.env.PUBLIC_URL + '/assets/unnamed@2x.png'} style={{ width: '100%' }} alt='logo' />
            <div className={styles.div1}>
                <div className={styles.logoDiv}>
                    <img src={process.env.PUBLIC_URL + '/assets/Logo-1@2x.png'} alt='logo' />
                </div>
                <div className={styles.div1text}>
                    Successful Password Reset!
                </div>
                <div className={styles.description}>
                    <span>You can now use your new password</span>
                    <br></br>
                    <span>to sign in to your account.</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '5%' }}>
                    <Button variant="contained" color="secondary" style={{ width: '43ch' }} onClick={() => { }}>
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    )
}
