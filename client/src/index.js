import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import Store from './store.js'
import StoreWithoutDevTools from './storeWithoutDevTools.js'
import env from './env'

ReactDOM.render(<Provider store={env.devTools?Store:StoreWithoutDevTools}>
    <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
