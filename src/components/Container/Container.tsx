import React, {useEffect, useRef, useState} from 'react';
import styles from './Container.css';
import {PostsContext} from "../shared/context/PostsContext";
import Card from "../Card/Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import Button from "../Card/Button/Button";

const Container = () => {
    const token = useSelector<RootState>(state => state.token)

    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const bottomOfList = useRef<HTMLDivElement>(null)
    const [nextAfter, setNextAfter] = useState('');
    const [loadCounter, setLoadCounter] = useState(0)

    const [isLoadingStop, setIsLoadingStop] = useState(false);

    useEffect(() => {
        async function load () {
            setIsLoading(true);
            setErrorLoading('');
            try {
                const response = await axios.get('https://oauth.reddit.com/best', {
                    headers: { Authorization: `bearer ${token}`},
                    params: {
                        limit: 3,
                        after: nextAfter,
                    }
                })
                console.log('response', response)
                const data = response?.data?.data
                setPosts(prevState => prevState.concat(...data.children));
                //setPosts(prevState => [...prevState, ...data.children]);
                setNextAfter(data?.after);

                setLoadCounter(prevState => prevState + 1)

            } catch (error) {
                console.error(error);
                setErrorLoading(String(error))
            }
            setIsLoading(false);

        }

        const observer = new IntersectionObserver((entries) => {
            console.log('entries', entries)
            console.log('IntersectionObserver')
            if(entries[0].isIntersecting && !isLoadingStop) {

                load();
                console.log( 'loadCounter', loadCounter );
                // console.log( 'isLoadingStop', isLoadingStop );
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
    }, [bottomOfList.current, token, nextAfter, isLoadingStop])

    function handleLoadMore() {
        setIsLoadingStop(false);
    }



    const toCapitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
    console.log( 'POSTS', posts );


    useEffect(() => {
        if (loadCounter !== 0 && loadCounter % 3 == 0) {
            setIsLoadingStop(true);
        }
    },[loadCounter])

    return (
        <div>
            {posts.length === 0 && !isLoading && !errorLoading && 'no posts'}

            {<div className={styles.container}>
                    {posts.length && posts.map((d: PostsContext, index) => {
                        return (<Card key={`${d.data.thumbnail}${Math.random()}`} card={toCapitalize(d.data.subreddit)}
                                     thumbnail={d.data.thumbnail} id={index}/>)
                    })}
                {isLoading && 'Loading...'}
                    {isLoadingStop && <Button text={'Load more...'} onClick={handleLoadMore}/>}
                    </div>
            }
            <div ref={bottomOfList} />

            {errorLoading &&
                <div role={"alert"}>
                    {errorLoading}
                </div>
            }

        </div>
    );
};

export default Container;