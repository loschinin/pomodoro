import React, {FC} from "react";
import usePostsData from "../../../hooks/usePostsData";

export type PostsContext = { data: { subreddit: string, thumbnail: string } }

export const postsContext = React.createContext<any[]>([{data: { subreddit: '', thumbnail: '' } }])

export const PostsContextProvider:FC = ({children}) => {
    const bigData = usePostsData()
    return (
        <postsContext.Provider value={bigData}>
            {children}
        </postsContext.Provider>
    )
}