import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm, reset } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import TextInput from './TextInput';

const mapState = state => ({
  login: state.form.loginForm
})

const validate = combineValidators({
  userName: isRequired('User name'),
  password: isRequired('Password')
})

const actions = {
  reset
}

const LoginForm = ({error, login, invalid, submitting, pristine, handleSubmit, reset}) => {
  return (
    <Form size="large" onSubmit={() => {
      handleSubmit(login.values)
      reset();
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
        {error && <Label basic color='red'>{error}</Label>}
        <Button disabled={pristine || submitting || invalid} fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(mapState, actions)(reduxForm({form: 'loginForm',enableReinitialize: true, validate})(LoginForm));