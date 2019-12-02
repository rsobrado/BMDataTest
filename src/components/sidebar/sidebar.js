import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './sidebar.scss';
import { Accordion, AccordionItem } from 'react-sanfona';

import {  Nav, NavItem, NavLink } from 'reactstrap';

  
  const Sidebar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
  
	const toggle = () => setIsOpen(!isOpen);
  
	return (
	  
		<div className="sidebar">

			<Accordion>
				<AccordionItem title='Baloncesto' expanded='true'>
					<Nav vertical>
						<NavItem>
							<NavLink href="#">NBA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">NCAA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">NCAA Extra</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Argentina</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  href="#">Brazil</NavLink>
						</NavItem>
					</Nav>
				</AccordionItem>
			</Accordion>

			<Accordion>
				<AccordionItem title='Futbol' >
					<Nav vertical>
						<NavItem>
							<NavLink href="#">FIFA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">UEFA</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">CONMEBOL</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">MLS</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  href="#">PREMIER LEAGUE</NavLink>
						</NavItem>
					</Nav>
				</AccordionItem>
			</Accordion>

			<Accordion>
				<AccordionItem title='Hockey' >
					<Nav vertical>
						<NavItem>
							<NavLink href="#">Australia</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Alemania</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Canada</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">NHL</NavLink>
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
