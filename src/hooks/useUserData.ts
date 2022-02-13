import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../components/shared/context/tokenContext";
import {IUserContextData} from "../components/shared/context/userContext";

const useUserData = () => {
    const token = useContext(tokenContext)
    const [data, setData] = useState<IUserContextData>({})
    console.log({token})
    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: `bearer ${token}`}
        })
            .then(({data: {name, icon_img}}) => setData({name, icon_img}))
            .catch(err => console.log(err))
    },[token])

    return [data]
};

export default useUserData;