import React, {useState, useContext} from 'react';

import PropTypes from 'prop-types';
import styles from './gamesSumary.scss';

import Game from './../game';
import { AppContext } from './../../App';


import { ListGroup, ListGroupItem } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
const GamesSumary = props => {
	const {state, dispatch} = useContext(AppContext);

	return (
		<div className="panel">
			<h1><Chip size="small"  elevation={4} label={state.sport}  className="MuiPaper-elevation4"/> <Chip size="small" variant="outlined" label={state.league} className="MuiPaper-elevation3"/> </h1>
			<div className="game-container">
				<Typography gutterBottom variant="h5" component="h5" className="card-tittle">12/12/2020 </Typography>
				<Card elevation={20} className="card-content-container">
					<CardContent className="card-content">
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
					</CardContent>
				</Card>
			</div>
		</div>
	);
};


const GamesSumaryPropTypes = {
	// always use prop types!
};

GamesSumary.propTypes = GamesSumaryPropTypes;

export default GamesSumary;
