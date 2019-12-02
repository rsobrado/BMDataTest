import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


import PropTypes from 'prop-types';
import styles from './MainNavbar.scss';


const MainNavbar = (props) => {
	const [collapsed, setCollapsed] = useState(true);
  
	const toggleNavbar = () => setCollapsed(!collapsed);
  
	return (
	  <div>
		<Navbar color="faded" light>
			<NavbarBrand href="/" className="mr-auto ">Jueguelo.com</NavbarBrand>

			<Nav className="xs-hidden">
				<NavItem>
					<NavLink href="#">Deportes</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">En Vivo</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">Casino</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">VIP</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">Profile</NavLink>
				</NavItem>
			</Nav>

			<NavbarToggler onClick={toggleNavbar} className="mr-2 md-hidden" />
			
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem>
						<NavLink href="#">Deportes</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">En Vivo</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Casino</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">VIP</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Profile</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	  </div>
	);
  }

const MainNavbarPropTypes = {
	// always use prop types!
};

MainNavbar.propTypes = MainNavbarPropTypes;

export default MainNavbar;
