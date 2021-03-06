import './App.css';
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./pages/Home"

function App() {

  return (
    <div>
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
