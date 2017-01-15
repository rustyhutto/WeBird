class TextInput extends React.Component {
  render () {
    return (
      <div className="center">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input
            type={this.props.type}
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  type: React.PropTypes.string
};
