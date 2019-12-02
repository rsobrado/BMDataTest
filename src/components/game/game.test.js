import React from 'react';
import { shallow, render, mount } from 'enzyme';
import game from './game';

describe('game', () => {
  let props;
  let shallowgame;
  let renderedgame;
  let mountedgame;

  const shallowTestComponent = () => {
    if (!shallowgame) {
      shallowgame = shallow(<game {...props} />);
    }
    return shallowgame;
  };

  const renderTestComponent = () => {
    if (!renderedgame) {
      renderedgame = render(<game {...props} />);
    }
    return renderedgame;
  };

  const mountTestComponent = () => {
    if (!mountedgame) {
      mountedgame = mount(<game {...props} />);
    }
    return mountedgame;
  };  

  beforeEach(() => {
    props = {};
    shallowgame = undefined;
    renderedgame = undefined;
    mountedgame = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
