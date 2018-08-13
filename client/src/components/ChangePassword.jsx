import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import TextInput from './TextInput';

const mapState = state => ({
  login: state.form.changePasswordForm
})

const validate = combineValidators({
  userName: isRequired('User name is required'),
  password: isRequired('Password is required'),
  newPassword: isRequired('New password is required')
})

const ChangePassword = ({error, login, invalid, submitting, pristine, handleSubmit}) => {
  return (
    <Form size="large" onSubmit={() => {
      handleSubmit(login.values)
    }}>
      <Segment>
        <Field
          name="userName"
          component={TextInput}
          type="text"
          placeholder="Username"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="Password"
        />
        <Field
          name="newPassword"
          component={TextInput}
          type="password"
          placeholder="Password"
        />
        {error && <Label basic color='red'>{error}</Label>}
        <Button disabled={pristine || submitting || invalid} fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(mapState)(reduxForm({form: 'changePasswordForm',enableReinitialize: true, validate})(ChangePassword));