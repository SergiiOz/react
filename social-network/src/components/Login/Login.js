import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputCustom } from '../common/FormsControls/FormsControls';
import { requiredField } from '../utils/validators/validators';
import { connect } from 'react-redux';
import { setLoginUserThunkCreator } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    //handleSubmit -> this special callBack, redux-form pass for us to props
    //inside handleSubmit has 3 actions
    //*event.preventDefault
    //*get all form data and put them to object
    //*props.onSubmit(formData)
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          validate={[requiredField]}
          component={InputCustom}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          validate={[requiredField]}
          component={InputCustom}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={InputCustom} />{' '}
        remember me
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

const Login = (props) => {
  const onLogin = (formData) => {
    console.log('login form', formData);
    props.setLogin(formData.email, formData.password, formData.rememberMe);
  };

  //if we authorized then redirect to page 'Profile'
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <p>Please auth on server</p>

      <LoginReduxForm onSubmit={onLogin} />
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (email, password, rememberMe) => {
      dispatch(setLoginUserThunkCreator(email, password, rememberMe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
