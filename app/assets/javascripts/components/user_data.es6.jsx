var UserData = React.createClass({
  getInitialState() {
    return { checklistId: 0, userId: 0 }
  },

  componentDidMount() {
    var id = this.props.id
    this.setState({userId: id})
  },

  displayChecklists() {
    var id = this.props.id
    $.ajax({
      url: `/api/v1/checklists/`,
      type: 'GET',
      data: { id: id },
      success: (checklists) => {
        console.log(checklists)
      }
    })
  },

  render () {
    return (
      <div>
      <div className="row">
          <div>
            <div className="tabs-left">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#a" data-toggle="tab">Checklists</a></li>
                <li><a href="#b" data-toggle="tab">Wishlists</a></li>
                <li><a href="#c" data-toggle="tab">Friends</a></li>

              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="a">
                  <h3>Checklists</h3>
                  <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>We still need a way to update state to know what tab to render,
                      and we need to render the checklists as td elements in the table.</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="b">
                  <h3>Wishlist</h3>
                </div>
                <div className="tab-pane" id="c">
                  <h3>Friends</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.displayChecklists} />
      </div>
    );
  }
});

UserData.propTypes = {
  id: React.PropTypes.number,
  checklist: React.PropTypes.object,
  wishlist: React.PropTypes.object,
  friends: React.PropTypes.array
};
