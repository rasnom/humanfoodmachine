var GenericMachine = React.createClass({

  getDefaultProps: function() {
    return {
      title: "Generic Machine",
      description: "A generic machine that does not actually do anything."
    }
  },

  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
});
