import React from 'react';
import {mount} from 'enzyme';
import TextItem from './index';

describe('TextItem', () => {
  const props = {
    title: 'string',
    tags: ['a', 'b']
  };

  it('render component', () => {
    const wrapper = mount(<TextItem {...props}/>);
    const h6 = wrapper.find('h6');
    const p = wrapper.find('p');
    expect(() => <TextItem {...props}/>).not.toThrow();
    expect(h6).toHaveLength(1);
    expect(h6.text()).toBe(props.title);
    expect(p.text()).toBe(props.tags.join(', '));
    expect(p).toHaveLength(1);
  });

});
