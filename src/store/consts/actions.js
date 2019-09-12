const restHelper = action => {
    actionType[`${action}_PENDING`] = `${action}_PENDING`;
    actionType[`${action}_SUCCESS`] = `${action}_SUCCESS`;
    actionType[`${action}_REJECT`] = `${action}_REJECT`;
};

const actionType = {
    GET_RES: 'GET_RES',
    REST_REQ_POST: 'REST_REQ_POST',
    REST_REQ_PUT: 'REST_REQ_PUT',
    REST_REQ: 'REST_REQ',
}

restHelper(actionType.GET_RES);


export default actionType;