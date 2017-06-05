var MachineSelector = React.createClass({
  getInitialState: function() {
    return {
      currentMachine: GenericMachine
    }
  },

  handleMachineChange: function(e) {
    const machines = {
      "Generic Machine": GenericMachine,
      "Conspire": ConspireMachine
    };

    this.setState({currentMachine: machines[e.target.value]})
  },

  optionsList: function() {
    var that = this;
    return (
      <ul>
        {this.props.options.map( function(option) {
          return (
            <li>
              <button onClick={that.handleMachineChange} value={option}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    )
  },

  render: function() {
    return (
      <div>
        <h3>Here is where you pick the machine</h3>
        {this.optionsList()}
        <div>
          Current Machine is
          <this.state.currentMachine stock={this.props.stock} />
        </div>
      </div>
    )
  }
});
