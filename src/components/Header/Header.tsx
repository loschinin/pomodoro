import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.css';
import UserBlock from "./UserBlock";


const _Header = () => {
    const title = 'Hello React'
    return (
        <div className={styles.header}>
            {title}
            <UserBlock />
        </div>
    );
};

export const Header = hot(_Header);