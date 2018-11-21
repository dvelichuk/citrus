const initialState = {
    data: [],
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            };
        case 'GET_PENDING':
            return {
                ...state,
                pending: action.pending
            };
        case 'GET_SUCCESS':
            return {
                ...state,
                data: state.data.concat(action.data),
            };
        case 'GET_ERROR':
            return {
                ...state,
                error: action.error
            };
         default:
            return state;
    }
};
