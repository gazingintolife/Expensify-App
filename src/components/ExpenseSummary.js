import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import SelectVisibleExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({count, total}) => {
    const formattedTotal = numeral(total/100).format('$0,0.00');
    const expenseWord = count === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <p>Viewing {count} {expenseWord} totalling {formattedTotal}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = SelectVisibleExpenses(state.expenses,state.filters)
    return {
        count: visibleExpenses.length,
        total: getExpenseTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);