import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Tasks from './feature/tasks/Tasks';
import Timesheet from './feature/timesheet/Timesheet';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/tasks' />} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/timesheet' component={Timesheet} />
      </Switch>
    </Router>
  );
};

export default App;
