import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import UserPage from './pages/UserPage/UserPage';
import NavBar from './components/NavBar'
import './App.css'
import ModalManager from './store/modals/ModalManager';


class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
        <NavBar/>
        <Container className="landing_page_body">
          <Switch>
            <Route exact path='/' component={LandingPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
