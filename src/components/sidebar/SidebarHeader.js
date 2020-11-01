import React from 'react';
import styles from './sidebarHeader.module.scss';
import avatar from '../../assets/images/avatar.jpg';
const SidebarHeader = ({admin}) => {
    return (

        
        <div className={styles.header}>
            {console.log(admin)}
            <img src={admin.pic ? admin.pic : avatar} alt={admin.name}/>
            <h3>{admin.name}</h3>
        </div>
    )
}

export default SidebarHeader
