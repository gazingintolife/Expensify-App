import uuid from 'uuid';
import database from '../firebase/firebase';



export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//startAddExpense is called by the component instead of addExpense as the former dispatches the later. 

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { 
            description = '', 
            note = '',                              // destructuring data from expenseData
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
    }
);

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });
