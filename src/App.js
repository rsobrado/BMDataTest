import React from 'react';

import './App.scss';
import  Dashboard  from './components/dashboard';
import MainNavbar from './components/mainNavbar';

function App() {
  return (
    <div className="App">
      <MainNavbar></MainNavbar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
