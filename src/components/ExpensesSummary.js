import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

const badAtNaming = (props) => {
    if(props.expenses.length === 0){
        return <p>There are no expenses</p>
    } else if (props.expenses.length === 1){
        return <p>You are viewing one expense totalling ${props.expenses[0].amount}</p>
    } else if (props.expenses.length > 1){
        return <p>You are viewing {props.expenses.length} expenses totalling ${props.expenses.map((expense) => parseInt(expense.amount, 10)).reduce((sum, value) => sum + value, 0)}</p>
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