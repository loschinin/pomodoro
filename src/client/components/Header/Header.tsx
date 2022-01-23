import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.css';
import {concat} from "../../../example";

const _Header = () => {
    const result = concat('Hello ', 'World') // -> Hello World;
    console.log(result)
    return (
        <div className={styles.header}>
                Hello React
        </div>
    );
};

export const Header = hot(_Header);