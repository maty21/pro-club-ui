import actions from '../consts/actions';
import axios from 'axios';


let url = '/';

const reject = (dispatch, payload, action) => {
    dispatch({
        type: `${action.payload.actionType}_REJECT`,
        meta: {
            message: {
                type: 'error',
                content: _formatError(payload)
            }
        },
        payload
    });
};

const pending = (dispatch, payload, action) => {
    dispatch({
        type: `${action.payload.actionType}_PENDING`,
        meta: action.meta,
        payload
    });
};

const success = (dispatch, payload, action) => {
    const successMessage = 'works';
    dispatch({
        type: `${action.payload.actionType}_SUCCESS`,
        meta: {
            message: {
                type: 'success',
                content: successMessage
            }
        },
        payload
    });
};

const DEFAULT_ERROR_MSG = 'Unexpected Error';

const _formatError = payload => {
    if (!payload) return DEFAULT_ERROR_MSG;
    return typeof payload === 'string' ? payload : payload.message || DEFAULT_ERROR_MSG;
};

const setPath = ({ monitorBackend }) => {
    let _url;
    if (monitorBackend.useLocation) {
        _url = `${location.origin}${monitorBackend.path}`; //eslint-disable-line
    } else {
        _url = `${monitorBackend.schema}${monitorBackend.host}:${monitorBackend.port}${monitorBackend.path}`;
    }

    return _url;
};

const restMiddleware = ({ dispatch }) => next => action => {
    if (
        ![
            actions.REST_REQ,

        ].includes(action.type)
    ) {
        return next(action);
    } else if (action.type === actions.REST_REQ) {
        if (!url) {
            return next(action);
        }
        pending(dispatch, 'pending', action);
        axios
            .get(`${url}${action.payload.url}`)
            .then(res => {
                success(dispatch, res.data, action);
            })
            .catch(err => {
                const response = err.response && err.response.data && err.response.data.error;
                reject(dispatch, response, action);
            });

        return next(action);
    } else if (action.type === actions.REST_REQ_POST) {
        if (!url) {
            return next(action);
        }
        pending(dispatch, 'pending', action);
        axios
            .post(`${url}/${action.payload.url}`, action.payload.body)
            .then(res => {
                success(dispatch, res.data, action);
            })
            .catch(err => {
                reject(dispatch, err.response.data.error, action);
            });

        return next(action);
    } else if (action.type === actions.REST_REQ_POST_FORM) {
        if (!url) {
            return next(action);
        }
        pending(dispatch, 'pending', action);
        axios
            .post(`${url}/${action.payload.url}`, action.payload.formData)
            .then(res => {
                success(dispatch, res.data, action);
            })
            .catch(err => {
                reject(dispatch, err.response.data.error, action);
            });

        return next(action);
    } else if (action.type === actions.REST_REQ_PUT) {
        if (!url) {
            return next(action);
        }
        pending(dispatch, 'pending', action);
        axios
            .put(`${url}/${action.payload.url}`, action.payload.body)
            .then(res => {
                success(dispatch, res.data, action);
            })
            .catch(err => {
                reject(dispatch, err.response.data.error, action);
            });

        return next(action);
    } else if (action.type === actions.REST_REQ_DELETE) {
        if (!url) {
            return next(action);
        }
        pending(dispatch, 'pending', action);
        axios
            .delete(`${url}/${action.payload.url}/${action.payload.body.algorithmName}`, {
                data: action.payload.body
            })
            .then(res => {
                success(dispatch, res.data, action);
            })
            .catch(err => {
                reject(dispatch, err.response.data.error, action);
            });

        return next(action);
    }
};

export default restMiddleware