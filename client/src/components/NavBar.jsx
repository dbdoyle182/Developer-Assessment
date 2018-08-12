import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { openModal } from '../store/modals/modalActions';


const actions = {
    openModal
}

const mapState = state => {
    return state
}

// const mapState = state => ({
//     auth: state.auth
// })
class NavBar extends Component {
    state = {
        authenticated: false
    }

    handleLogin = () => {
        this.props.openModal('LoginModal')
    }

    handleSignUp = () => {
        this.props.openModal('SignUpModal');
        console.log("This Works")
    }

    handleLogOut = () => {
        this.setState({
            authenticated: false
        })
        this.props.history.push('/')
    }

    render() {
        const { authenticated } = this.state
        
        return (
            <Menu inverted>
                <Container>
                <Menu.Item as={Link} to='/' header>
                    Home
                </Menu.Item>
                

                {authenticated && 
                <Menu.Item>
                    <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                </Menu.Item>
                }
                {authenticated ?
                    <SignedInMenu logOut={this.handleLogOut}/>
                    :
                    <SignedOutMenu logIn={this.handleLogin} signUp={this.handleSignUp}/>
                }
                
                </Container>
            </Menu>
        )
    } 
}

export default withRouter(connect(mapState, actions)(NavBar));