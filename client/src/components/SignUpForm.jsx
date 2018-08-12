import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import { connect } from 'react-redux';
import TextInput from './TextInput';

const mapState = state => ({
  signup: state.form.signUpForm
})

const validate = combineValidators({
  givenName: isRequired({message: "Please provide your given name"}),
  familyName: isRequired({message: "Please provide your family name"}),
  password: composeValidators(
    isRequired({message: 'Please provide a description'}),
    hasLengthGreaterThan(6)({message: 'Description must have at least 5 characters'})
  )(),
  email: isRequired('email'),
  gender: isRequired('gender'),
  phoneNumber1: isRequired('phoneNumber1'),
  userName: isRequired('userName')
})

class SignUpForm extends Component {


  
  render () {
    const { signup, invalid, submitting, pristine, handleFormSubmit } = this.props;
    return (
      <div>
        <Form size="large" onSubmit={() => handleFormSubmit(signup.values)}>
          <Segment>
            <Field
              name="givenName"
              type="text"
              component={TextInput}
              placeholder="Known As"
            />
            <Field
              name="familyName"
              type="text"
              component={TextInput}
              placeholder="Known As"
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
              placeholder="Gender"
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
            <Field
              name="password"
              type="password"
              component={TextInput}
              placeholder="Password"
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

export default connect(mapState)(reduxForm({form: 'signUpForm', enableReinitialize: true, validate})(SignUpForm));