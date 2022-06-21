import React from 'react';
import {hot} from "react-hot-loader/root";
import '../main.global.css'
import Layout from "./Layout/Layout";
import {Header} from "./Header/Header";
import Container from "./Container/Container";
import {PostsContextProvider} from "./shared/context/PostsContext";
import {applyMiddleware, createStore, Middleware} from "redux";
import {Provider,} from "react-redux";
import {composeWithDevTools} from  "redux-devtools-extension";
import {rootReducer} from "../store";
import thunk from "redux-thunk";

const logger: Middleware = () => (next) => (action) => {
    console.log('middleware logger', action)
    next(action)
}

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, logger)
))

const AppComponent = () => {

    return (
        <Provider store={store} >
            <Layout>
                <Header />
                <PostsContextProvider>
                    <Container />
                </PostsContextProvider>
            </Layout>
        </Provider>
    );
};

export const App = hot(() => <AppComponent/>);