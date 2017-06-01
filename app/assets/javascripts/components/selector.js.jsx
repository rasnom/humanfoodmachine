var MachineSelector = React.createClass({
  render: function() {
    var optionsList = this.props.options.map(function(option) {
      return <li>{option}</li>
    });


    return (
      <div>
        <h3>Here is where you pick the machine</h3>
        <ul>{optionsList}</ul>
      </div>
    )
  }
});
