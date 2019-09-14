import actions from '../consts/actions';

export const getResult = () => ({
    type: actions.REST_REQ,
    payload: {
        url: 'api',
        actionType: actions.GET_RES
    }
})