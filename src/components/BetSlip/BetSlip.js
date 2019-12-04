import React,{useState, useContext } from 'react';
import { AppContext } from './../../App';

import PropTypes from 'prop-types';

import Bet from '../Bet'

const BetSlip = props => {

	const {state, dispatch} = useContext(AppContext);
	
	return(
		<div className="bets-container ">
			<Bet></Bet>
			<Bet></Bet>
			<Bet></Bet>
				
		</div>
	)
	
};

const BetSlipPropTypes = {
	// always use prop types!
};

BetSlip.propTypes = BetSlipPropTypes;

export default BetSlip;
