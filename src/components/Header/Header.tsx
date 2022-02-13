import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.css';
import {concat} from "../../example";
import AnonymousAvatarIcon from "../icons/AnonymousAvatarIcon";

const _Header = () => {
    const result = concat('Hello ', 'React')
    const userName = 'User Name'
    const CLIENT_ID = '1X0f9ABoGnaUyCkD8aqZXw'
    const TYPE = 'code'
    const RANDOM_STRING = 'random_string'
    const URI = 'http://localhost:3001/auth'
    const DURATION = 'permanent'
    const SCOPE_STRING = 'read submit identity'

    return (
        <div className={styles.header}>
            {result}
            <a href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`} className={styles.user}>
                <AnonymousAvatarIcon/> {userName}
            </a>
        </div>
    );
};

export const Header = hot(_Header);