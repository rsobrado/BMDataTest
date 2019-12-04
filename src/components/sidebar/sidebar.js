import React, { useState, useContext } from 'react';
import { AppContext } from './../../App';

import PropTypes from 'prop-types';
import styles from './sidebar.scss';
import { Accordion, AccordionItem } from 'react-sanfona';

import {  Nav, NavItem, NavLink } from 'reactstrap';

  
  const Sidebar = props => {
	const [isOpen, setIsOpen] = useState(false);
	const {state, dispatch} = useContext(AppContext);
  
	const toggle = () => setIsOpen(!isOpen);

	const handleClick = (league,sport) => e => {
		// const newValue = param;
		console.log(sport);
		console.log(league);

		dispatch({ type: 'UPDATE_LEAGUE', data: league,});
		dispatch({ type: 'UPDATE_SPORT', data: sport,});

		// this.setState({ ["value" + param]: nextValue });
	  };
  
	return (

		<div className="sidebar">

			<Accordion>
				<AccordionItem title='Baloncesto' expanded='true'>
					<Nav vertical>
						<NavItem>
							<NavLink onClick={handleClick("NBA",'Baloncesto')} href="#">NBA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("NCAA",'Baloncesto')} href="#">NCAA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("NCAA Extra",'Baloncesto')} href="#">NCAA Extra</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("Argentina",'Baloncesto')} href="#">Argentina</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  onClick={handleClick("Brazil",'Baloncesto')} href="#">Brazil</NavLink>
						</NavItem>
					</Nav>
				</AccordionItem>
			</Accordion>

			<Accordion>
				<AccordionItem title='Futbol' >
					<Nav vertical>
						<NavItem>
							<NavLink onClick={handleClick("FIFA", "Futbol")} href="#">FIFA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("UEFA", "Futbol")} href="#">UEFA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("CONMEBOL", "Futbol")} href="#">CONMEBOL</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("MLS", "Futbol")} href="#">MLS</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  onClick={handleClick("PREMIER LEAGUE", "Futbol")} href="#">PREMIER LEAGUE</NavLink>
						</NavItem>
					</Nav>
				</AccordionItem>
			</Accordion>

			<Accordion>
				<AccordionItem title='Hockey' >
					<Nav vertical>
						<NavItem>
							<NavLink onClick={handleClick("Australia","Hockey")} href="#">Australia</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("Alemania","Hockey")} href="#">Alemania</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("Canada","Hockey")} href="#">Canada</NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={handleClick("NHL","Hockey")} href="#">NHL</NavLink>
						</NavItem>
					</Nav>
				</AccordionItem>
			</Accordion>

		</div>

	);
  }


const sidebarPropTypes = {
	// always use prop types!
};

// Sidebar.propTypes = sidebarPropTypes;

export default Sidebar;
