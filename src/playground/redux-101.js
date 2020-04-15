import { createStore, bindActionCreators } from 'redux';

// action generators



const incCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT' ,
    incrementBy
});

const decCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT', 
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 100 } = {}) => ({
    type: 'SET',
    count
});

// reducers
// 1 reducers are pure functions
// 2 never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET': 
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
                return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incCount({ incrementBy: 5 }));

store.dispatch(incCount());

store.dispatch(resetCount());

store.dispatch(decCount());

store.dispatch(decCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 50 }));