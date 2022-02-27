import React, { useEffect, useState} from 'react';
import styles from "./header.css";
import AnonymousAvatarIcon from "../icons/AnonymousAvatarIcon";
import {useDispatch} from "react-redux";
import {setToken} from "../../store";
import axios from "axios";

const CLIENT_ID = '1X0f9ABoGnaUyCkD8aqZXw'
const TYPE = 'code'
const RANDOM_STRING = 'random_string'
const URI = 'http://localhost:3001/auth'
const DURATION = 'permanent'
const SCOPE_STRING = 'read submit identity'

const UserBlock = () => {

    const dispatch = useDispatch()
    const [data, setData] = useState<{ name: string, icon_img: string }>({name: 'sign in', icon_img: ''})

    useEffect(() => {
        if (window.__token__) {
            dispatch(setToken(window.__token__))
            console.log('window.__token__', window.__token__)
            axios.get('https://oauth.reddit.com/api/v1/me', {
                headers: { Authorization: `bearer ${window.__token__}`}
            })
                .then(({data: {name, icon_img}}) => setData({name, icon_img}))
                .catch(err => console.log(err))
        }
    },[])

    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`} className={styles.user}>
            {data.icon_img ? <img src={data.icon_img} alt='' /> : <AnonymousAvatarIcon/>} {data.name}
        </a>
    );
};

export default UserBlock;