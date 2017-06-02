var MachineSelector = React.createClass({

  getInitialState: function() {
    return {
      currentMachine: "Initial Default"
    }
  },

  handleMachineChange: function(e) {
    console.log(this)
  },

  optionsList: function() {
    var that = this;
    return that.props.options.map(function(option) {
      return (
        <li>
          <button onClick={that.handleMachineChange}>
            {option}
          </button>
        </li>
      )
    });
  },

  render: function() {
    return (
      <div>
        <h3>Here is where you pick the machine</h3>
        <ul>{this.optionsList()}</ul>
        <div>
          Current Machine is
          <Machine title={this.state.currentMachine} />
        </div>
      </div>
    )
  }
});
