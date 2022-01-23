import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.css';
import {concat} from "../../example";

const _Header = () => {
    const result = concat('Hello ', 'React')
    return (
        <div className={styles.header}>
            {result}
        </div>
    );
};

export const Header = hot(_Header);