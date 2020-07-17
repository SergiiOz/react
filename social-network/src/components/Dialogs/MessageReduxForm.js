import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  requiredField,
  maxLengthCreator,
} from '../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLenght20 = maxLengthCreator(20);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newMessageText"
          // replacing string 'textarea' with component {Textarea} from components/common/FormsControls
          component={Textarea}
          validate={[requiredField, maxLenght20]}
          rows="5"
          cols="33"
        />
      </div>

      <div>
        <button type="submit"> Add message</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  // a unique name for the form
  form: 'dialogNewMessageText',
})(MessageForm);

export default MessageReduxForm;
