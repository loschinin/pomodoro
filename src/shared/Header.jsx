import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.less';

const _Header = () => {
    return (
        <div className={styles.example}>
                Hello React
        </div>
    );
};

export const Header = hot(_Header);