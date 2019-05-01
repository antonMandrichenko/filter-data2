import React from 'react';
import {shallow, mount} from 'enzyme';
import ErrorMessage from './index';

describe('ErrorMessage', () => {
  const props = {
    classes: {},
    isOpenMessage: false,
    message: 'error message',
  };

  const state = {
    isOpen: false,
  };

  it('render component', () => {
    const wrapper = mount(<ErrorMessage {...props}/>);
    expect(() => <ErrorMessage {...props}/>).not.toThrow();
    wrapper.setState(state);
    const snackbar = wrapper.find('Snackbar');
    expect(snackbar).toHaveLength(1);
    wrapper.setState({isOpen: true});
    snackbar.props().open = true;
    expect(snackbar.props().open).toBe(true);
    snackbar.props().onClose();
    wrapper.setState({isOpen: false});
    snackbar.props().open = false;
    expect(snackbar.props().open).toBe(false);
  });

  it('check props', () => {
    const wrapper = shallow(<ErrorMessage {...props}/>);
    expect(wrapper.instance().props.isOpenMessage).toBe(props.isOpenMessage);
    expect(wrapper.instance().props.message).toBe(props.message);
  });

});
