import { combineReducers } from 'redux';
import { results } from './results.reducer'

//import { workerTable } from 'reducers/worker.reducer';

const dataSources = {
    results
};

export default combineReducers(dataSources);