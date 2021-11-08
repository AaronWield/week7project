import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Portfolio, Resume, Information} from './components'
import reportWebVitals from './reportWebVitals'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title={'home'}/>
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio title={'portfolio'} />
        </Route>
        <Route exact path='/information'>
          <Information title={'information'}/>
        </Route>
        <Route exact path='/resume'>
          <Resume title={'resume'}/>
        </Route>
      </Switch>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();