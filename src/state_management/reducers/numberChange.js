const initialState = 0

const changeNumber = (currentState = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return currentState + 1

        case 'DECREMENT':
            return currentState - 1
    
        default:
            return currentState;
    }
}

export default changeNumber