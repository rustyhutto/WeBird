class UserShow extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='profile-col user-profile'>
              <div className='profile-pic'>
                Picture
              </div>
              <div className='user-info'>
                <ul>
                  <li>Username: {this.props.user.username}</li>
                  <li>Email: {this.props.user.email}</li>
                  <li>Groups: {this.props.user.groups}</li>
                  <li>Location: {this.props.user.location}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='user-data'>
              <UserData id={this.props.user.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserShow.propTypes = {
  user: React.PropTypes.object,
};
