import React from 'react';
import {hot} from "react-hot-loader/root";
import '../main.global.css'
import Layout from "./Layout/Layout";
import {Header} from "./Header/Header";
import Container from "./Container/Container";
import {useToken} from "../hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/PostsContext";

const AppComponent = () => {
    const [token] = useToken()
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <PostsContextProvider>
                        <Container />
                    </PostsContextProvider>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    );
};

export const App = hot(() => <AppComponent/>);