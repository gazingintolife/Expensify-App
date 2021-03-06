import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('abc123',{note: 'new note Value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {note : 'new note Value'}
    })
})

test('should set up add expense action object with provided values', () => {
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
}); 


// test('should add expenses to database and store', () => {

// })

// test('should add expenses with default values to database and store', () => {
    
// })


// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: '',
//             id: expect.any(String)
//         }
//     })
// })