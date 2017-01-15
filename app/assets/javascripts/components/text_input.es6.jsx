class TextInput extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Label: {this.props.label}</div>
        <div>On Change: {this.props.onChange}</div>
        <div>Placeholder: {this.props.placeholder}</div>
        <div>Value: {this.props.value}</div>
        <div>Type: {this.props.type}</div>
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
