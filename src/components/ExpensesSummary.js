import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

const badAtNaming = (props) => {
    if(props.expenses.length === 0){
        return <h3>Viewing zero expenses totalling 0 dollars</h3>
    } else if (props.expenses.length === 1){
        return <h3>You are viewing one expense totalling ${props.expenses[0].amount}</h3>
    } else if (props.expenses.length > 1){
        return <h3>You are viewing {props.expenses.length} expenses totalling ${props.expenses.map((expense) => parseInt(expense.amount, 10)).reduce((sum, value) => sum + value, 0)}</h3>
    }
} 

const ExpensesSummary = (props) => {
    console.log(props);
    return (
        <div>{badAtNaming(props)}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);