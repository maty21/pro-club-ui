import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import SiderLayout from './components/Layout'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';
import store from './store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routing />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
