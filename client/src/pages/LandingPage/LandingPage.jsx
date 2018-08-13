import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';
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
          <Image id="scw_logo" src="https://www.security-camera-warehouse.com/skin/frontend/default/scw-bootstrapped/images/scwlogo_w.png" size="large" alt="Security Camera Warehouse"/>
          {!auth.authenticated ?
            <div className="noauth_info">
              <Header as='h2' icon>
                <Icon name='id card' />
                   Account Information
                <Header.Subheader>Log In or Sign Up to access your account information</Header.Subheader>
              </Header> 
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