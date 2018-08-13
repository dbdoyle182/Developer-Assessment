import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import axios from 'axios';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { openModal } from '../store/modals/modalActions';
import { logout } from '../store/auth/authActions';


const actions = {
    openModal,
    logout
}

const mapState = state => ({
    auth: state.auth
})
class NavBar extends Component {

    handleLogin = () => {
        this.props.openModal('LoginModal')
    }

    handleSignUp = () => {
        this.props.openModal('SignUpModal');
    }

    handleLogOut = (user) => {
        axios.put(`https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/logout/${user}`,
        {"userName": user},
        {
        headers: {
            "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
        }
        }).then(res => {
            console.log(res)
            this.setState({
                user: {}
            })
            this.props.logout()
        }).catch(err => {
            console.log(err)
        })
        
    }

    render() {
        const { auth } = this.props
        
        return (
            <Menu inverted fixed="top" className="nav_menu">
                <Container>
                <Menu.Item as={Link} to='/' header>
                    Home
                </Menu.Item>
                
                {auth.authenticated ?
                    <SignedInMenu logOut={() => this.handleLogOut(auth.currentUser.creds.userName)}/>
                    :
                    <SignedOutMenu logIn={this.handleLogin} signUp={this.handleSignUp}/>
                }
                
                </Container>
            </Menu>
        )
    } 
}

export default withRouter(connect(mapState, actions)(NavBar));