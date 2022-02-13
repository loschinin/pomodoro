import React, {useContext} from 'react';
import styles from "./header.css";
import AnonymousAvatarIcon from "../icons/AnonymousAvatarIcon";
import {userContext} from "../shared/context/userContext";

const CLIENT_ID = '1X0f9ABoGnaUyCkD8aqZXw'
const TYPE = 'code'
const RANDOM_STRING = 'random_string'
const URI = 'http://localhost:3001/auth'
const DURATION = 'permanent'
const SCOPE_STRING = 'read submit identity'

const UserBlock = () => {

const { name, icon_img } = useContext(userContext)
    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`} className={styles.user}>
            {icon_img ? <img src={icon_img} alt='' /> : <AnonymousAvatarIcon/>} {name}
        </a>
    );
};

export default UserBlock;