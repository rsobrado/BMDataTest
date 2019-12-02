import React,{useState} from 'react';

import styles from './game.scss';
import {  Nav, NavItem, NavLink,Container } from 'reactstrap';

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Slide from '@material-ui/core/Slide';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

  const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });


const Game = props => {
	const [open, setOpen] = React.useState(false);

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
					<p>Team 1</p>
					<p>Team 2</p>
				</div>
			</div>
			<div className="team-stats">
				<div className="team-a-stats">
					<Nav >
						<NavItem>
							<Badge  color="primary" overlap="circle" badgeContent={'-'} >
								<Button color="secondary" onClick={handleClickOpen}>3½</Button>
							</Badge> 
						</NavItem>
						<NavItem>
							<Button color="secondary" onClick={handleClickOpen}>234</Button>
						</NavItem>
						<NavItem>
							<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
								<Button color="secondary" onClick={handleClickOpen}>O6½</Button>
							</Badge> 
						</NavItem>
					</Nav>
				</div>
				<div className="team-b-stats">
					<Nav >
						<NavItem>
							<Badge  color="primary" overlap="circle" badgeContent={'-'} >
								<Button color="secondary" onClick={handleClickOpen}>3½</Button>
							</Badge> 
						</NavItem>
						<NavItem>
							<Button color="secondary" onClick={handleClickOpen}>234</Button>
						</NavItem>
						<NavItem>
							<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
								<Button color="secondary" onClick={handleClickOpen}>O6½</Button>
							</Badge> 
						</NavItem>
					</Nav>
				</div>

			</div>
			<div className="game-add">
				<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
					<Button color="secondary" onClick={handleClickOpen}>1</Button>
				</Badge> 
				
				<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
					<AppBar >
						<Toolbar>
							<Button edge="start" color="secondary" onClick={handleClose} aria-label="close"><CloseIcon /></Button>
							<Typography variant="h2" >Bet Slip</Typography>
							<Button autoFocus color="secondary" onClick={handleClose}><SaveIcon />save</Button>
						</Toolbar>
					</AppBar>
					<Container fluid>
						<div className="panel row content">
							<div className="bets-container ">
							<div className="bet">
									<Typography gutterBottom variant="h6" component="h6">
										BET 
									</Typography>
									
									<Card >
										<CardActionArea>
											<CardContent>
												<Nav >
													<NavItem>
														<Badge  color="primary" overlap="circle" badgeContent={'-'} >
															<Button color="secondary" onClick={handleClickOpen}>3½</Button>
														</Badge> 
													</NavItem>
													<NavItem>
														<Button color="secondary" onClick={handleClickOpen}>234</Button>
													</NavItem>
													<NavItem>
														<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
															<Button color="secondary" onClick={handleClickOpen}>O6½</Button>
														</Badge> 
													</NavItem>
												</Nav>
											</CardContent>
										</CardActionArea>
									</Card>
								</div><div className="bet">
									<Typography gutterBottom variant="h6" component="h6">
										BET 
									</Typography>
									
									<Card >
										<CardActionArea>
											<CardContent>
												<Nav >
													<NavItem>
														<Badge  color="primary" overlap="circle" badgeContent={'-'} >
															<Button color="secondary" onClick={handleClickOpen}>3½</Button>
														</Badge> 
													</NavItem>
													<NavItem>
														<Button color="secondary" onClick={handleClickOpen}>234</Button>
													</NavItem>
													<NavItem>
														<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
															<Button color="secondary" onClick={handleClickOpen}>O6½</Button>
														</Badge> 
													</NavItem>
												</Nav>
											</CardContent>
										</CardActionArea>
									</Card>
								</div><div className="bet">
									<Typography gutterBottom variant="h6" component="h6">
										BET 
									</Typography>
									
									<Card >
										<CardActionArea>
											<CardContent>
												<Nav >
													<NavItem>
														<Badge  color="primary" overlap="circle" badgeContent={'-'} >
															<Button color="secondary" onClick={handleClickOpen}>3½</Button>
														</Badge> 
													</NavItem>
													<NavItem>
														<Button color="secondary" onClick={handleClickOpen}>234</Button>
													</NavItem>
													<NavItem>
														<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
															<Button color="secondary" onClick={handleClickOpen}>O6½</Button>
														</Badge> 
													</NavItem>
												</Nav>
												<Nav >
													<NavItem>
														<Badge  color="primary" overlap="circle" badgeContent={'-'} >
															<Button color="secondary" onClick={handleClickOpen}>3½</Button>
														</Badge> 
													</NavItem>
													<NavItem>
														<Button color="secondary" onClick={handleClickOpen}>234</Button>
													</NavItem>
													<NavItem>
														<Badge  color="secondary" overlap="circle" badgeContent={'+'} >
															<Button color="secondary" onClick={handleClickOpen}>O6½</Button>
														</Badge> 
													</NavItem>
												</Nav>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>
							</div>
						</div>
					</Container>
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
