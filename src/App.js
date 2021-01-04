import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Counter}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
