import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  requiredField,
  maxLengthCreator,
} from '../../utils/validators/validators';
import { TextareaCustom } from '../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(10);

const TextareaForm = (props) => {
  return (
    //handleSubmit -> this special callBack, redux-form pass for us to props
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          // replacing string 'textarea' with component {TextareaCustom} from components/common/FormsControls
          component={TextareaCustom}
          validate={[requiredField, maxLength30]}
          placeholder="write text"
        />
      </div>
      <button>Add post</button>
    </form>
  );
};
const PostReduxForm = reduxForm({
  // a unique name for the form
  form: 'profileNewPostText',
})(TextareaForm);

export default PostReduxForm;
