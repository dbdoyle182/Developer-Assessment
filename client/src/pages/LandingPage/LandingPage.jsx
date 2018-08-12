import React from 'react';
import ButtonLink from '../../components/ButtonLink'

const LandingPage = () => {
  return (
    <div>
      <ButtonLink destination="/signup" message="Sign Up" />
      <ButtonLink destination="/login" message="Log In" />
      <ButtonLink destination="/user" message="User profile"/>
    </div>
  )
}

export default LandingPage;