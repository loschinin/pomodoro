import React, { useContext} from 'react';
import styles from './Container.css';
import {PostsContext, postsContext} from "../shared/context/PostsContext";
import Card from "../Card/Card";

const Container = () => {

    const [bigData] = useContext(postsContext)

    return (
        <div className={styles.container}>
            {bigData.length && bigData.map((d: PostsContext) => {
                console.log(d)
                return d.data.thumbnail.endsWith('.jpg') &&
                    (<Card key={d.data.thumbnail} card={d.data.subreddit} thumbnail={d.data.thumbnail}/>)
            })

            }
        </div>
    );
};

export default Container;