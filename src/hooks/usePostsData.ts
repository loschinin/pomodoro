import { useEffect, useState} from "react";
import axios from "axios";
import {PostsContext} from "../components/shared/context/PostsContext";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const usePostsData = () => {

    const token = useSelector<RootState, string>(state => state.token)

    const [result, setResult] = useState<PostsContext[]>([{data: { subreddit: '', thumbnail: '' } }])

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