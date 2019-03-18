import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
// import NavBar from './components/NavBar';
import CardForm from './components/CardForm';
import { Container } from 'semantic-ui-react';
// import './App.css';

const App = () => (
  <Fragment>
    {/* <NavBar /> */}
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cardform' component={CardForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;