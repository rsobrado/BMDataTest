import React from 'react';
import PropTypes from 'prop-types';
import styles from './gamesSumary.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Game from './../game';

const gamesSumary = props => {
	return (
		<div className="panel">
			<h1>Games</h1>
			<div className="content">
				<h6>10/10/2020</h6>
				<ListGroup flush>
					<ListGroupItem  >
						<Game></Game>
					</ListGroupItem>
					<ListGroupItem  >
						<Game></Game>
					</ListGroupItem>
					<ListGroupItem  >
						<Game></Game>
					</ListGroupItem>
					
				</ListGroup>
			</div>
			<div className="content">
				<h6>10/10/2020</h6>
				<ListGroup flush>
					<ListGroupItem  >
						<Game></Game>
					</ListGroupItem>
					<ListGroupItem  >
						<Game></Game>
					</ListGroupItem>
					<ListGroupItem  >
						<Game></Game>
					</ListGroupItem>
					
				</ListGroup>
			</div>
		</div>
	);
};

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class gamesSumary extends React.Component {
//   render() {
//     return <div>This is a component called gamesSumary.</div>;
//   }
// }

const gamesSumaryPropTypes = {
	// always use prop types!
};

gamesSumary.propTypes = gamesSumaryPropTypes;

export default gamesSumary;
