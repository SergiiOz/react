import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component="input" />
      </div>
      <div>
        <Field placeholder="Password" name="password" component="input" />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" /> remember
        me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <p>Please auth on server</p>

      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
