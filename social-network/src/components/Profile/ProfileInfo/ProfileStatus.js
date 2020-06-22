import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  onEditMode = () => {
    this.setState({ editMode: true });
  };

  offEditMode = () => {
    this.setState({ editMode: false });
  };
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.onEditMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onBlur={this.offEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
