import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';

const badAtNaming = (props) => {
    if(props.expenses.length === 0){
        return <h1>No expenses for the given filters</h1>
    } else if (props.expenses.length === 1){
        return <h1>You are viewing <span>1</span> expense totalling <span>${props.expenses[0].amount}</span></h1>
    } else if (props.expenses.length > 1){
        return <h1>You are viewing <span>{props.expenses.length}</span> expenses totalling <span>${props.expenses.map((expense) => parseInt(expense.amount, 10)).reduce((sum, value) => sum + value, 0)}</span></h1>
    }
} 

const ExpensesSummary = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header__title">{badAtNaming(props)}</div>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);