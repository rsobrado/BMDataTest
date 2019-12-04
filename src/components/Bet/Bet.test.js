import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Bet from './Bet';

describe('Bet', () => {
  let props;
  let shallowBet;
  let renderedBet;
  let mountedBet;

  const shallowTestComponent = () => {
    if (!shallowBet) {
      shallowBet = shallow(<Bet {...props} />);
    }
    return shallowBet;
  };

  const renderTestComponent = () => {
    if (!renderedBet) {
      renderedBet = render(<Bet {...props} />);
    }
    return renderedBet;
  };

  const mountTestComponent = () => {
    if (!mountedBet) {
      mountedBet = mount(<Bet {...props} />);
    }
    return mountedBet;
  };  

  beforeEach(() => {
    props = {};
    shallowBet = undefined;
    renderedBet = undefined;
    mountedBet = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
