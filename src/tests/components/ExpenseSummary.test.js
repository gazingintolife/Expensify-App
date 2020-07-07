import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpenseSummary';

test('Should correctly render ExpenseSummary with 1 expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} total = {235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpenseSummary with multiple expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {23} total = {2354}/>);
    expect(wrapper).toMatchSnapshot();
});

