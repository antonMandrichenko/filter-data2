import React from 'react';
import {shallow} from 'enzyme';
import {App} from './index';

describe('App', () => {
  const props = {
    classes: {},
    store: {},
  };

  it('render component', () => {
    expect(() => <App {...props}/>).not.toThrow();
  });

});
