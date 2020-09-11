import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';


test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    //expect(wrapper.find('h1').length).toBe(1);        find is used to target a specific element of a component, and it's properties like length, text etc.
    //expect(wrapper.find(#heading).text())).toBe("Anything") 
    expect(wrapper).toMatchSnapshot();
    
    //expect(wrapper.find('h1').length).toBe(1);
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});