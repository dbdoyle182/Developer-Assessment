import React, { Component } from 'react'
import axios from 'axios';
import { Segment, List } from 'semantic-ui-react';




class UserPage extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    axios.get('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/Trilom1', {
      headers: {
        "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
      }
    }).then(res => {
      const user = JSON.parse(res.data.body);
      console.log(user)
      this.setState({
        user: user
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const { user } = this.state
    return (
      <div>
        <Segment.Group>
          <Segment>User Information</Segment>
          {user.UserAttributes &&
          <Segment.Group>
            <List>
              <List.Item className='data' icon='address card outline' content={`Full Name: ${user.UserAttributes[3].Value} ${user.UserAttributes[4].Value}`} />
              <List.Item className='data' icon='user' content={`Username: ${user.Username}`} />
              <List.Item className='data' icon='mail' content={`Email: ${user.UserAttributes[5].Value}`} />
              <List.Item className='data' icon='phone' content={`Phone Number: ${user.UserAttributes[2].Value}`} />
            </List>
          </Segment.Group>
          }
        </Segment.Group>
      </div>
    )
  }
}

export default UserPage;

