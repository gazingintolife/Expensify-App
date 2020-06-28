import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
// selectExpenses is actually getVisibleExpenses but we default export it there

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ):
            (
                props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>;
                })
            )
        }
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
