import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tasks from './feature/tasks/Tasks';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </Router>
  );
};

export default App;
