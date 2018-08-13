import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm, reset } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import { connect } from 'react-redux';
import TextInput from './TextInput';

const mapState = state => ({
  signup: state.form.signUpForm
});

const actions = {
  reset
}

const validate = combineValidators({
  givenName: isRequired({message: "Please provide your first name"}),
  familyName: isRequired({message: "Please provide your last name"}),
  password: composeValidators(
    isRequired({message: 'Please provide a password'}),
    hasLengthGreaterThan(6)({message: 'Password must have at least 6 characters'})
  )(),
  email: isRequired('email'),
  gender: isRequired('gender'),
  phoneNumber1: isRequired({message: 'Phone number is required'}),
  userName: isRequired({message: 'Username is required'})
});

class SignUpForm extends Component {


  
  render () {
    const { signup, invalid, submitting, pristine, handleFormSubmit, reset } = this.props;
    return (
      <div>
        <Form size="large" onSubmit={() => {
          handleFormSubmit(signup.values)
          reset();
        }}>
          <Segment>
            
            <Field
              name="givenName"
              type="text"
              component={TextInput}
              placeholder="First Name"
            />
            <Field
              name="familyName"
              type="text"
              component={TextInput}
              placeholder="Last Name"
            />
            <Field
              name="email"
              type="email"
              component={TextInput}
              placeholder="Email"
            />
            <Field
              name="gender"
              type="text"
              component={TextInput}
              placeholder="Male or Female"
            />
            <Field
              name="phoneNumber1"
              type="text"
              component={TextInput}
              placeholder="Phone Number"
            />
            <Field
              name="userName"
              type="text"
              component={TextInput}
              placeholder="Desired Username"
            />
            <Button disabled={invalid || submitting || pristine} fluid size="large" color="teal" type="submit">
              Register
            </Button>
          </Segment>
        </Form>
      </div>
    );
  }
};

export default connect(mapState, actions)(reduxForm({form: 'signUpForm', enableReinitialize: true, validate})(SignUpForm));