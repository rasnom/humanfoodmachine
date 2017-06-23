var GenericMachine = React.createClass({

  getDefaultProps: function() {
    return {
      title: "Generic Machine",
      description: "A generic machine that simply allows you to select a snack."
    }
  },

  handleSnackSelection: function(e) {
    alert("you got a " + e.target.value)
  },

  displayOptions: function() {
    that = this;
    return (
      <ul>
        {this.props.stock.map( function(item) {
          return (
            <li><button value={item} onClick={that.handleSnackSelection}>
              {item}
            </button></li>
          )
        })}
      </ul>
    );
  },

  displayInterface: function() {
    return (
      <div>
        {this.displayOptions()}
      </div>
    )
  },

  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        {this.displayInterface()}
      </div>
    );
  }
});
