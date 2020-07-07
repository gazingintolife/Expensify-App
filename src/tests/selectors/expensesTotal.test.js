import getExpenseTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const result = getExpenseTotal([]);
    expect(result).toBe(0);
})

// test('Should correctly add up a single expense', () => {
//     const result = getExpenseTotal(expenses[1]);
//     expect(result).toBe(10000);
// })

test('Should add up all expenses',() => {
    const result = getExpenseTotal(expenses);
    expect(result).toBe(11695);
})