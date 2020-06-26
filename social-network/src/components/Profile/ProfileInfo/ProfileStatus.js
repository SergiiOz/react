import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  onEditMode = () => {
    this.setState({ editMode: true });
  };

  offEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({ status: event.target.value });
  };

  //when we get status from server -> synchronization local status to global status (from profile-reducer)
  componentDidUpdate(prevProps, prevState) {
    // if our prev local state doesn't equel to status from props
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.onEditMode}>
              Status: {this.props.status || '---'}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.offEditMode}
              //local state
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
