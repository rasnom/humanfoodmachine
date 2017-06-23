var MachineSelector = React.createClass({
  getInitialState: function() {
    return {
      currentMachine: null
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
      <ul className=''>
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

  displayMachine: function() {
    if (this.state.currentMachine != null) {
      return <this.state.currentMachine stock={this.props.stock} />
    }
  },

  render: function() {
    return (
      <div className='machineSelector'>
        <h3>Select a machine to use: </h3>
        {this.optionsList()}
        <div>
          {this.displayMachine()}
        </div>
      </div>
    )
  }
});
