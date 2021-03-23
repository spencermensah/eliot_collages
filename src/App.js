import './App.css';
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./pages/Home"
import Splash from "./pages/Splash"

import SwipeableTemporaryDrawer from './components/modal/SwipeableTemporaryDrawer';

function App() {

  return (
    <div>
      <SwipeableTemporaryDrawer/>
      <HashRouter>
        <div>
          <Route exact path="/" component={Splash} />
          <Route exact path="/Home" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
