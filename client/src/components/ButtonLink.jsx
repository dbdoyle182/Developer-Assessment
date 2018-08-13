import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';


// Button Link component to be use if react router is implemented
const ButtonLink = ({destination, message}) => {
  return (
    <div>
        <Button animated as={Link} to={destination}>
            <Button.Content visible>{message}</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
        </Button>
    </div>
  )
}

export default ButtonLink
