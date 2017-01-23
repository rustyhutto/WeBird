class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: '', username: ''}};
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    var credentials = this.state.credentials
    console.log(credentials)
    $.ajax({
      url: '/api/v1/users',
      type: 'POST',
      data: { user: credentials },
      success: (id) => {
        window.location.href = `users/${id}`
      }
    });
  }

  render () {
    return (
      <div className="row center">
        <div className="signup-form">
          <form>
            < TextInput
              name="username"
              label="Username"
              type="username"
              value={this.state.credentials.username}
              onChange={this.onChange}/>

            < TextInput
              name="email"
              label="Email"
              value={this.state.credentials.email}
              onChange={this.onChange}/>

            < TextInput
              name="password"
              label="Password"
              type="password"
              value={this.state.credentials.password}
              onChange={this.onChange}/>

            < input
              type="submit"
              className="signup-submit btn btn-primary"
              onClick={this.onSave}/>
          </form>
        </div>
      </div>
    )
  }
}

