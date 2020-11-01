import React from 'react';
import styles from './navbar.module.scss';
import {MdNotificationsActive, MdSettings} from 'react-icons/md';

const Navheader = ({name}) => {
    return (
        <nav className={styles.nav}>
            <h3>{name}</h3>
            <div className={styles.icon_container}>
                <MdNotificationsActive className={styles.icons} />
                <MdSettings  className={styles.icons} />    
            </div>
        </nav>
    )
}

export default Navheader
