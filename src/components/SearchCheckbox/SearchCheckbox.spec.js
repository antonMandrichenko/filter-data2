import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchCheckbox from './index';

describe('SearchCheckbox', () => {
  const props = {
    classes: {},
    filterMenu: ['all', 'b', 'c'],
    dataItems: [
      {title: 'a', tags: ['b', 'c']},
      {title: 'b', tags: ['b', 'c']},
    ],
    allDataToFilter: () => {},
    getItemsByInput: () => {},
    getItemsByTag: () => {},
  };

  it('render component', () => {
    const wrapper = mount( <SearchCheckbox {...props}/>);
    expect(() => <SearchCheckbox {...props}/>).not.toThrow();
    expect(wrapper.find('FormControl')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('RadioGroup')).toHaveLength(1);
    expect(wrapper.find('FormControlLabel')).toHaveLength(props.filterMenu.length + 1);
    expect(wrapper.find('Radio')).toHaveLength(props.filterMenu.length + 1);
    expect(wrapper.find('SearchInput')).toHaveLength(1);
  });

  it('check props', () => {
    const wrapper = shallow( <SearchCheckbox {...props}/>);
    expect(wrapper.instance().props.filterMenu).toBe(props.filterMenu);
    expect(wrapper.instance().props.dataItems).toBe(props.dataItems);
  });

});
