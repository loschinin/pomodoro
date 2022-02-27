import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.css';
import UserBlock from "./UserBlock";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const _Header = () => {
    const title = useSelector<RootState, string>(state => state.headerTitle)
    return (
        <div className={styles.header}>
            {title}
            <UserBlock />
        </div>
    );
};

export const Header = hot(_Header);