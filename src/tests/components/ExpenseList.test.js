import { ExpenseList } from '../../components/ExpenseList';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses} />); // expenselist requires an array of data so we paas our fixtures expenses data as a prop.
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list empty message', () => {
    const wrapper = shallow(<ExpenseList expenses = {[]} />);
    expect(wrapper).toMatchSnapshot();
});