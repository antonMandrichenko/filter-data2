import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchInput from './index';

describe('SearchInput', () => {
  const props = {
    classes: {},
    isInput: false,
    dataItems: [
      {title: 'a', tags: ['b', 'c']},
      {title: 'b', tags: ['b', 'c']},
    ],
    inputOnFocus: () => {},
    getItemsByInput: () => {},
  };

  it('render component', () => {
    const wrapper = mount(<SearchInput {...props}/>);
    const input = wrapper.find('input');
    expect(() => <SearchInput {...props}/>).not.toThrow();
    expect(input).toHaveLength(1);
    expect(input).toHaveProperty('ref');
  });

  it('check props', () => {
    const wrapper = shallow(<SearchInput {...props}/>);
    expect(wrapper.instance().props.dataItems).toBe(props.dataItems);
  });

  it('check events', () => {
    const wrapper = mount(<SearchInput {...props} />);
    const input = wrapper.find('input');
    input.simulate('focus');
    input.simulate('change');
    input.value = 'a';
    expect(input.value).toBe('a')
  });

});
