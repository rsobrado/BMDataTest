import React from 'react';
import { shallow, render, mount } from 'enzyme';
import sidebar from './sidebar';

describe('sidebar', () => {
  let props;
  let shallowsidebar;
  let renderedsidebar;
  let mountedsidebar;

  const shallowTestComponent = () => {
    if (!shallowsidebar) {
      shallowsidebar = shallow(<sidebar {...props} />);
    }
    return shallowsidebar;
  };

  const renderTestComponent = () => {
    if (!renderedsidebar) {
      renderedsidebar = render(<sidebar {...props} />);
    }
    return renderedsidebar;
  };

  const mountTestComponent = () => {
    if (!mountedsidebar) {
      mountedsidebar = mount(<sidebar {...props} />);
    }
    return mountedsidebar;
  };  

  beforeEach(() => {
    props = {};
    shallowsidebar = undefined;
    renderedsidebar = undefined;
    mountedsidebar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
