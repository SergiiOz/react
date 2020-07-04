import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newMessageText" component="textarea" rows="5" cols="33" />
      </div>

      <div>
        <button type="submit"> Add message</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  // a unique name for the form
  form: 'newMessage',
})(MessageForm);

export default MessageReduxForm;
