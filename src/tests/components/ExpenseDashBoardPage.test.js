import React from 'react';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';
import { shallow } from 'enzyme';


test('should render ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});