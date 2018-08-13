import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Segment, List, Loader, Dimmer, Button } from 'semantic-ui-react';
import { openModal } from '../../store/modals/modalActions';

const actions = {
  openModal
}

class UserPage extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(`https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/${this.props.userName}`, {
      headers: {
        "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
      }
    }).then(res => {
      const user = JSON.parse(res.data.body);
      console.log(res)
      this.setState({
        user: user
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const { user } = this.state;
    const {openModal} = this.props;
    return (
      <div className="user_info">
        <Segment.Group>
          <Segment>User Information <Button onClick={() => openModal("PasswordModal")} content="Change Password" basic/></Segment>
        
          {user.UserAttributes ?
          <Segment.Group>
            <List>
              <List.Item id='data' icon='address card outline' content={`Full Name: ${user.UserAttributes[3].Value} ${user.UserAttributes[4].Value}`} />
              <List.Item id='data' icon='user' content={`Username: ${user.Username}`} />
              <List.Item id='data' icon='mail' content={`Email: ${user.UserAttributes[5].Value}`} />
              <List.Item id='data' icon='phone' content={`Phone Number: ${user.UserAttributes[2].Value}`} />
            </List>
          </Segment.Group>
          :
          <Dimmer active>
            <Loader>
              Loading
            </Loader>
          </Dimmer>
          }
        </Segment.Group>
      </div>
    )
  }
}

export default connect(null, actions)(UserPage);

