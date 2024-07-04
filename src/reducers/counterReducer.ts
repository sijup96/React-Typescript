export interface Action {
    type: 'increment' | 'decrement' | 'reset';
}

export interface State {
    value: number;
}

const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { ...state, value: state.value + 1 };
        case 'decrement':
            return { ...state, value: state.value - 1 };
        case 'reset':
            return { ...state, value: 0 };
        default:
            return state;
    }
}

export default counterReducer;
