import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MainNavbar from './MainNavbar';

describe('MainNavbar', () => {
  let props;
  let shallowMainNavbar;
  let renderedMainNavbar;
  let mountedMainNavbar;

  const shallowTestComponent = () => {
    if (!shallowMainNavbar) {
      shallowMainNavbar = shallow(<MainNavbar {...props} />);
    }
    return shallowMainNavbar;
  };

  const renderTestComponent = () => {
    if (!renderedMainNavbar) {
      renderedMainNavbar = render(<MainNavbar {...props} />);
    }
    return renderedMainNavbar;
  };

  const mountTestComponent = () => {
    if (!mountedMainNavbar) {
      mountedMainNavbar = mount(<MainNavbar {...props} />);
    }
    return mountedMainNavbar;
  };  

  beforeEach(() => {
    props = {};
    shallowMainNavbar = undefined;
    renderedMainNavbar = undefined;
    mountedMainNavbar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
