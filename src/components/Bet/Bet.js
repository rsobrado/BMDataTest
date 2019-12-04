import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bet.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {  Nav, NavItem, NavLink } from 'reactstrap';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Bet = props => {

	return (
		<div className="bet">
			<Typography gutterBottom variant="h5" component="h5" className="card-tittle">BET </Typography>
			<Card elevation={15} className="card-content-container">
				<CardContent className="card-content">
					<Nav >
						<NavItem>
							<Badge  color="primary" overlap="circle" badgeContent={'-'} >
								<Button color="secondary" >3½</Button>
							</Badge> 
						</NavItem>
						<NavItem>
							<Button color="secondary" >234</Button>
						</NavItem>
						<NavItem>
							<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
								<Button color="secondary" >O6½</Button>
							</Badge> 
						</NavItem>
						<NavItem>
							<Badge  color="primary" overlap="circle" badgeContent={'-'} >
								<Button color="secondary" >3½</Button>
							</Badge> 
						</NavItem>
						<NavItem>
							<Button color="secondary" >234</Button>
						</NavItem>
						<NavItem>
							<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
								<Button color="secondary" >O6½</Button>
							</Badge> 
						</NavItem>
					</Nav>
				</CardContent>
			</Card>
		</div>
	);
};
	

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Bet extends React.Component {
//   render() {
//     return <div>This is a component called Bet.</div>;
//   }
// }

const BetPropTypes = {
	// always use prop types!
};

Bet.propTypes = BetPropTypes;

export default Bet;
