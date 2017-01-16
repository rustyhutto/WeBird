class UserShow extends React.Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Welcome, {this.props.user.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

UserShow.propTypes = {
  user: React.PropTypes.object,
};
