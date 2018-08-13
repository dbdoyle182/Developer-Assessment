import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({logIn, signUp}) => {
    return (
        <Menu.Item position="right">
            <Button onClick={logIn} basic inverted content="Login" />
            <Button id="sign_up" basic onClick={signUp} inverted content="Sign Up" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
    )
}

export default SignedOutMenu;