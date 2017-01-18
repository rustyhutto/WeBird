class UserShow extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-xs-4'>
            <div className='profile-col user-profile'>
              <div className='profile-pic'>
                Picture
              </div>
              <div className='user-info text-center'>
                  <h4>Username: {this.props.user.username}</h4>
                  <h4>Email: {this.props.user.email}</h4>
                  <h4>Groups: {this.props.user.groups}</h4>
                  <h4>Location: {this.props.user.location}</h4>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-xs-8'>
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
