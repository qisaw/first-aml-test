import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { HorseList } from './features/horseList/HorseList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/horses/page/:pageNum" exact component={HorseList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
