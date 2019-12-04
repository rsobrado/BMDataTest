import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BetSlip from './BetSlip';

describe('BetSlip', () => {
  let props;
  let shallowBetSlip;
  let renderedBetSlip;
  let mountedBetSlip;

  const shallowTestComponent = () => {
    if (!shallowBetSlip) {
      shallowBetSlip = shallow(<BetSlip {...props} />);
    }
    return shallowBetSlip;
  };

  const renderTestComponent = () => {
    if (!renderedBetSlip) {
      renderedBetSlip = render(<BetSlip {...props} />);
    }
    return renderedBetSlip;
  };

  const mountTestComponent = () => {
    if (!mountedBetSlip) {
      mountedBetSlip = mount(<BetSlip {...props} />);
    }
    return mountedBetSlip;
  };  

  beforeEach(() => {
    props = {};
    shallowBetSlip = undefined;
    renderedBetSlip = undefined;
    mountedBetSlip = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
