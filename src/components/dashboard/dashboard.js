import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.scss';
import Sidebar from './../sidebar';

import GamesSumary from './../gamesSumary';

import {
	Container,
	NavLink
   } from 'reactstrap';
  
  
  const Dashboard = (props) => {
  
	return (
	  
		<Container fluid>
			<div className="row dashboard">
				<Sidebar></Sidebar>				
				<GamesSumary></GamesSumary>
			</div>
		</Container>
	);
  }
  
  export default Dashboard;
  