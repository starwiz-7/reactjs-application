import React from 'react'
import styles from './UserList.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import Card from '../../../components/UserListCard/UserListCard'

export default function UserList() {
    return (
        <div className={styles.main}>
            <div className={styles.titleAndSearch}>
                <div className={styles.title}>
                    UserList
                </div>
                <div className={styles.searchAndButton}>
                    <div className={styles.searchBar}>
                        <SearchIcon />
                        <TextField id="standard-basic" label="Search user..." />
                    </div>
                    <Button variant="contained" style={{ backgroundColor: '#50c878', color: 'white' }}>
                        Invite User
                    </Button>
                </div>
            </div>
            <div className={styles.grid}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
