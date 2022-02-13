import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../components/shared/context/tokenContext";
import {PostsContext} from "../components/shared/context/PostsContext";

const usePostsData = () => {
    const token = useContext(tokenContext)
    const [result, setResult] = useState<PostsContext[]>([{data: { subreddit: '', thumbnail: '' } }])
    console.log({token})

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json', {
            headers: { Authorization: `bearer ${token}`}
        })
            .then(({data}) => {
                data.data.children.length && setResult(data.data.children)
            })
            .catch(err => console.log(err))
    },[token])

    return [result]
};

export default usePostsData;