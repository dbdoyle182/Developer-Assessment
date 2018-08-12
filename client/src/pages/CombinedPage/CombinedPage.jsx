import React, { Component } from 'react';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import { Menu, Segment } from '../../../node_modules/semantic-ui-react';


class CombinedPage extends Component {
    state = {
        form: "Sign Up"
    }

    handleLogInSelection = () => {
        this.setState({
            form: "Log In"
        })
    }

    handleSignUpSelection = () => {
        this.setState({
            form: "Sign Up"
        })
    }
    render() {
        const { form } = this.state
        return (
            <div>
                <Segment.Group>
                    <Segment>
                        <Menu>
                            <Menu.Item name="Sign Up" onClick={this.handleSignUpSelection} active={form === "Sign Up"}/>
                            <Menu.Item name="Log In" onClick={this.handleLogInSelection} active={form === "Log In"}/>
                        </Menu>
                    </Segment>
                    <Segment attached>
                        {form === "Sign Up" ?
                            <SignUpPage/>
                            :
                            <LoginPage/>
                        }
                    </Segment>
                </Segment.Group>
            </div>
        )
  }
}

export default CombinedPage;
