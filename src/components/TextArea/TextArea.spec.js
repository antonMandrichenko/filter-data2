import React from 'react';
import {shallow, mount} from 'enzyme';
import TextArea from './index';


describe('TextArea', () => {
  const props = {
    classes: {},
    filterData: [
      {title: 'a', tags: ['b', 'c']},
      {title: 'b', tags: ['b', 'c']},
    ],
  };

  it('render component', () => {
    const wrapper = mount(<TextArea {...props}/>);
    expect(() => <TextArea/>).not.toThrow();
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('li')).toHaveProperty('key');
  });

  it('check props', () => {
    const wrapper = shallow(<TextArea {...props}/>);
    expect(wrapper.instance().props.filterData).toBe(props.filterData);
  });

});
