import React, {Component} from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import UserPage from '../UserPage/UserPage';
import CombinedPage from '../CombinedPage/CombinedPage';


const mapState = state => ({
  auth: state.auth
})

class LandingPage extends Component {

  render() {
    const { auth } = this.props
    return (
      <div>
        <Grid className="landing_page_body">
          <Grid.Column width={10}>
          {!auth.authenticated ?
            <div>
              <p>Please log in or sign up to see your user credentials</p>
              <img src="https://www.security-camera-warehouse.com/skin/frontend/default/scw-bootstrapped/images/scwlogo_w.png" alt="Security Camera Warehouse" />
            </div>
            :
            <UserPage userName={auth.currentUser.creds.userName}/>
          }
          </Grid.Column>
          <Grid.Column width={6}>
            <CombinedPage />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState)(LandingPage);