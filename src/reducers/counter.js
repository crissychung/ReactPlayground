const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT_ASYNC':
            return state + action.value;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;