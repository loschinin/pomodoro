import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "../components/App";

window.addEventListener('load', () => {
    ReactDOM.hydrate(<App/>, document.getElementById('react_root'));
})