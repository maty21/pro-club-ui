import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/root.reducer';
import restMiddleware from './middleware/rest.middleware';
import React from 'react';


const middleware = [restMiddleware];

if (process.env.NODE_ENV === 'development') {
    //   
}

const composeEnhancers =
    process.env.NODE_ENV === 'development' && typeof window === 'object'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);
export default store;