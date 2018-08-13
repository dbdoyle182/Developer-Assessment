import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
//import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
import NavBar from './components/NavBar'
import './App.css'
import ModalManager from './store/modals/ModalManager';


class App extends Component {
  // componentDidMount() {
  //   axios.delete('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/dbdoyle', {
  //     headers: {
  //       "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
  //     }
  //   }).then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
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
