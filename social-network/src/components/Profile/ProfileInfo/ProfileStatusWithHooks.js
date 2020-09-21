import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const onEditMode = () => {
    setEditMode(true);
  };

  const offEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={onEditMode}>Status: {status || '---'}</span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={offEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
