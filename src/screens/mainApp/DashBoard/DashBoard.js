import React from 'react'
import styles from './DashBoard.module.css'

import Card from '../../../components/Card/Card'

export default function Dashboard() {
    return (
        <>
            <div className={styles.title}>
                Dashboard
            </div>
            <div className={styles.grid}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
