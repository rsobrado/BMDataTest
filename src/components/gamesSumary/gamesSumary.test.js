import React from 'react';
import { shallow, render, mount } from 'enzyme';
import gamesSumary from './gamesSumary';

describe('gamesSumary', () => {
  let props;
  let shallowgamesSumary;
  let renderedgamesSumary;
  let mountedgamesSumary;

  const shallowTestComponent = () => {
    if (!shallowgamesSumary) {
      shallowgamesSumary = shallow(<gamesSumary {...props} />);
    }
    return shallowgamesSumary;
  };

  const renderTestComponent = () => {
    if (!renderedgamesSumary) {
      renderedgamesSumary = render(<gamesSumary {...props} />);
    }
    return renderedgamesSumary;
  };

  const mountTestComponent = () => {
    if (!mountedgamesSumary) {
      mountedgamesSumary = mount(<gamesSumary {...props} />);
    }
    return mountedgamesSumary;
  };  

  beforeEach(() => {
    props = {};
    shallowgamesSumary = undefined;
    renderedgamesSumary = undefined;
    mountedgamesSumary = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
