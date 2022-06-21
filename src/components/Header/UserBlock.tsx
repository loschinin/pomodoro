import React, { useEffect} from 'react';
import styles from "./header.css";
import AnonymousAvatarIcon from "../icons/AnonymousAvatarIcon";
import {useDispatch, useSelector} from "react-redux";
import {IUserData, meRequestAsync, saveToken} from "../../actions";
import {RootState} from "../../store";

const CLIENT_ID = '1X0f9ABoGnaUyCkD8aqZXw'
const TYPE = 'code'
const RANDOM_STRING = 'random_string'
const URI = 'http://localhost:3001/auth'
const DURATION = 'permanent'
const SCOPE_STRING = 'read submit identity'

const UserBlock = () => {

    const dispatch = useDispatch()
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const loading = useSelector<RootState, boolean>(state => state.me.loading)

    useEffect(() => {
        dispatch(saveToken())
        dispatch(meRequestAsync())
    },[])

    return loading
        ? <>loading...</>
        : (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`} className={styles.user}>
            {data.iconImg ? <img src={data.iconImg} alt='' /> : <AnonymousAvatarIcon/>} {data.name}
        </a>
    );
};

export default UserBlock;