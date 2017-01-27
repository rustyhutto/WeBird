var ChecklistShow = React.createClass({
  getInitialState() {
    return { birds: [] }
  },
  
  componentDidMount() {
    var {id} = this.props.checklist
    $.ajax({
      url: `/api/v1/checklists/${id}`,
      type: 'GET',
      success: (birds) => {
        this.setState({birds})
      }
    })
  },

  render () {
    return (
      <div>
        <div>Checklist: {this.props.checklist.location}</div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Species</th>
              <th>Count</th>
              <th>Vegetation</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.state)}
            {this.state.birds.map((bird) => {
              return (
                <tr key={bird.id}>
                  <td>{bird.species}</td>
                  <td>{bird.count}</td>
                  <td>{bird.vegetation}</td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
  }
})

ChecklistShow.propTypes = {
  checklist: React.PropTypes.object
};
