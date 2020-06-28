import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description : '',
        amount : 0,
        createdAt : moment(),
        note : ''
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense with id', () => {
    const updates = {
        id: '0',
        description : 'hi there',
        amount : 500,
        createdAt : moment(),
        note : 'hi'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expenseReducer(expenses, action);
expect(state).toEqual([updates, expenses[1], expenses[2]]);
});

test('should not edit an expense without an id', () => {
    const updates = {
        id: '0',
        description : 'hi there',
        amount : 500,
        createdAt : moment(),
        note : 'hi'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expenseReducer(expenses, action);
expect(state).toEqual(expenses);
});