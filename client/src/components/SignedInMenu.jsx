import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default ({logOut}) => {
  return (
    <Menu.Item position="right">
        <Button onClick={logOut} content="Log Out" />
    </Menu.Item>
  )
}