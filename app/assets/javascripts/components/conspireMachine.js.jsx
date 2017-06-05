var ConspireMachine = React.createClass({
  getInitialState: function() {
    return {
      selection: null
    }
  },

  getDefaultProps: function() {
    return {
      title: "Conspire",
      description: "A machine that requires multiple people to use."
    }
  },

  handleSelection: function(e) {
    this.setState({selection: e.target.value})
  },

  displayOptions: function() {
    that = this;
    return (
      <ul>
        {this.props.stock.map( function(item) {
          return (
            <li><button value={item} onClick={that.handleSelection}>
              {item}
            </button></li>
          )
        })}
      </ul>
    )
  },

  handleSubmit: function() {
    if (this.state.selection != null) {
      alert ("you got a " + this.state.selection)
    }
  },

  submitter: function() {
    return (<button onClick={this.handleSubmit}>submit</button>)
  },

  displayInterface: function() {
    return (
      <div>
        {this.displayOptions()}
        {this.submitter()}
      </div>
    )
  },

  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {this.displayInterface()}
      </div>
    );
  }
});
