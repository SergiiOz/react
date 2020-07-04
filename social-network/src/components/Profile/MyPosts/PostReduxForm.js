import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TextareaForm = (props) => {
  return (
    //handleSubmit -> this special callBack, redux-form pass for us to props
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" />
      </div>
      <button>Add post</button>
    </form>
  );
};

const PostReduxForm = reduxForm({
  // a unique name for the form
  form: 'newPost',
})(TextareaForm);

export default PostReduxForm;
