import React, { useReducer } from 'react';
import './App.scss';

//Import immutability-helper
import update from 'immutability-helper';

import  Dashboard  from './components/dashboard';
import MainNavbar from './components/mainNavbar';

export const AppContext = React.createContext();
  
const initialState = {
  league: 'NBA',
  teamHome: 'TeamHome',
  teamAway: 'TeamAway',
  sport: 'Baloncesto'
  
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_LEAGUE': 
    return update(state, { league: {$set: action.data}});
    case 'UPDATE_TEAMHOME': 
    return update(state, { teamHome: {$set: action.data}});
    case 'UPDATE_TEAMAWYA': 
    return update(state, { leateamAwaygue: {$set: action.data}});
    case 'UPDATE_SPORT': 
    return update(state, { sport: {$set: action.data}});

    default:return initialState;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <div className="App">
          <AppContext.Provider value={{ state, dispatch }}>
            <MainNavbar></MainNavbar>
            <Dashboard></Dashboard>
          </AppContext.Provider>
      </div>
  );
}


export default App;
