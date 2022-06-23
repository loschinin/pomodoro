import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './Container.css';
import {PostsContext, postsContext} from "../shared/context/PostsContext";
import Card from "../Card/Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import Button from "../Card/Button/Button";

const Container = () => {
    const token = useSelector<RootState>(state => state.token)

    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorLoading, setErrorLoading] = useState<string>('');
    const bottomOfList = useRef<HTMLDivElement>(null)
    const [after, setAfter] = useState('');
    const [loadCounter, setLoadCounter] = useState(0)

    const [isLoadingStop, setIsLoadingStop] = useState<boolean>(false);

    useEffect(() => {
        async function load () {
            setIsLoading(true);
            setErrorLoading('');
            try {
                const response = await axios.get('https://oauth.reddit.com/rising', {
                    headers: { Authorization: `bearer ${token}`},
                    params: {
                        limit: 1,
                        after,
                    }
                })
                const data = response?.data?.data
                setPosts(prevState => [...prevState, ...data.children]);
                setAfter(data?.after);
                console.log('response', response)
                setLoadCounter(prevState => prevState + 1)

            } catch (error) {
                console.error(error);
                setErrorLoading(String(error))
            }
            setIsLoading(false);

        }

        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                console.log('load more')
                if (!isLoadingStop) load();
                console.log( 'loadCounter', loadCounter );
                console.log( 'isLoadingStop', isLoadingStop );
            }
        }, {
            rootMargin: '10px',
        })
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }


    }, [bottomOfList.current, after, token, loadCounter, isLoadingStop])

    function handleLoadMore() {
        setIsLoadingStop(false);
    }

    const [bigData] = useContext(postsContext)

    const toCapitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
    console.log( 'POSTS', posts );

    const isOldData = false;

    useEffect(() => {

        [3, 6, 9, 12].map((c) => {
            c === loadCounter && setIsLoadingStop(true);
        })
    },[loadCounter])

    return (
        <div>
            {posts.length === 0 && !isLoading && !errorLoading && 'no posts'}

            {isLoading
                ? 'Loading......'
                : <div className={styles.container}>
                    {posts.map(({data}) => <Card key={data.id + Math.random()} card={data.title} thumbnail={''}/>)}
                        <div ref={bottomOfList} />
                    {isLoadingStop && <Button text={'Загрузить еще...'} onClick={handleLoadMore}/>}
                    </div>
            }


            <hr/>
            {isOldData && bigData.length && bigData.map((d: PostsContext) => {
                // console.log(d)
                return d.data.thumbnail.endsWith('.jpg') &&
                    (<Card key={d.data.thumbnail} card={toCapitalize(d.data.subreddit)} thumbnail={d.data.thumbnail}/>)
            })}

            {errorLoading &&
                <div role={"alert"}>
                    {errorLoading}
                </div>
            }

        </div>
    );
};

export default Container;