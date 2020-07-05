import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    //handleSubmit -> this special callBack, redux-form pass for us to props
    //inside handleSubmit has 3 actions
    //*event.preventDefault
    //*get all form data and put them to object
    //*props.onSubmit(formData)
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
  const onLogin = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <p>Please auth on server</p>

      <LoginReduxForm onSubmit={onLogin} />
    </div>
  );
};

export default Login;
