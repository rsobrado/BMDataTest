import React,{useState, useContext } from 'react';
import { AppContext } from './../../App';

import styles from './game.scss';
import {  Nav, NavItem, NavLink } from 'reactstrap';

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';

import BetSlip from '../BetSlip'

  

const Game = props => {
	const {state, dispatch} = useContext(AppContext);
	const [open, setOpen] = React.useState(false);

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	  });
	
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return(
		<div className="game">
			<div className="game-info">
				<div className="game-time">
					<p>8:00pm</p>
				</div>
				<div className="teams">
					<p>{state.teamHome} vs {state.teamAway}</p>
				</div>
			</div>
			<div className="team-stats">
				
				<Nav >
					<NavItem>
						<Badge  color="primary" overlap="circle" badgeContent={'-'} >
							<Button color="secondary" onClick={handleClickOpen} >3½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Badge  color="primary" overlap="circle" badgeContent={'-'} >
							<Button color="secondary" onClick={handleClickOpen} >3½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Badge  color="primary" overlap="circle" badgeContent={'-'} >
							<Button color="secondary" onClick={handleClickOpen} >3½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Badge  color="primary" overlap="circle" badgeContent={'-'} >
							<Button color="secondary" onClick={handleClickOpen} >3½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Badge  color="primary" overlap="circle" badgeContent={'-'} >
							<Button color="secondary" onClick={handleClickOpen} >3½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Button color="secondary" onClick={handleClickOpen} >234</Button>
					</NavItem>
					<NavItem>
						<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
							<Button color="secondary" onClick={handleClickOpen} >O6½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Badge  color="primary" overlap="circle" badgeContent={'-'} >
							<Button color="secondary" onClick={handleClickOpen} >3½</Button>
						</Badge> 
					</NavItem>
					<NavItem>
						<Button color="secondary" onClick={handleClickOpen} >234</Button>
					</NavItem>
					<NavItem>
						<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
							<Button color="secondary" onClick={handleClickOpen} >O6½</Button>
						</Badge> 
					</NavItem>
				</Nav>
			</div>
			<div className="game-add">
				<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
					<Button color="secondary" onClick={handleClickOpen}>1</Button>
				</Badge> 
				
				<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
					<AppBar >
						<Toolbar>
							<Button edge="start" color="secondary" onClick={handleClose} aria-label="close"><CloseIcon /></Button>
							<Typography variant="h2" > <b>{state.teamHome}</b> vs <b>{state.teamAway}</b> <Chip size="small" elevation={4} label={state.sport} color="primary" className="MuiPaper-elevation4"/> <Chip size="small" variant="outlined" label={state.league} className="MuiPaper-elevation3"/> </Typography>
							<Button autoFocus color="secondary" onClick={handleClose}><SaveIcon />save</Button>
						</Toolbar>
					</AppBar>
					<div className="panel">
						<BetSlip></BetSlip>
					</div>
				</Dialog>
 
			</div>
			
		</div>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class game extends React.Component {
//   render() {
//     return <div>This is a component called game.</div>;
//   }
// }

const gamePropTypes = {
	// always use prop types!
};

Game.propTypes = gamePropTypes;

export default Game;
