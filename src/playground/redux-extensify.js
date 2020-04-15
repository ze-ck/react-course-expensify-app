import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE Action
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE Action
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE Action
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER Action
const setTextFilter = ( text ) => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT Action
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SORT_BY_DATE Action
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SET_START_DATE Action
const setStartDate = ( text ) => ({
  type: 'SET_START_DATE',
  text
})

//  SET_END_DATE Action
const setEndDate = ( text ) => ({
  type: 'SET_END_DATE',
  text
})



// filters reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.text
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.text
      }
    default:
      return state;
  }
}

// get visibile expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.created >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.created <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

// store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibileExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
      id: 'string',
      description: 'january rent',
      note: 'this was the final payment for that address',
      amount: 95000,
      createdAt: 0
  }],
  filters: {
      text: 'rent',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
  }
};