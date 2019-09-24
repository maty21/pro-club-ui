import { handleActions } from 'redux-actions';

import actions from '../consts/actions';
import { produce } from "immer";
import _ from 'lodash'
// export const algorithmTable = handleActions(
//     {
//         [actions.GET_RES](currState, { payload }) {
//             const algorithms = payload.algorithms;
//             const isValidPayload = Array.isArray(algorithms);
//             return isValidPayload ? Immutable.set(currState, 'dataSource', algorithms) : currState;
//         }
//     },

// );


// export const results = produce((state, { payload }) =>
//     handleActions(
//         {
//             [`${actions.GET_RES}_SUCCESS`](state, { payload }) {
//                 return _.merge(state, payload);
//             }
//         },
//         ({ ea: [], mixer: [] })
//     )
// )
export const results = handleActions(
    {
        [`${actions.GET_RES}_SUCCESS`](state, { payload }) {
            return _.merge(state, payload);
        }
    },
    ({ ea: {}, mixer: [] })
);

