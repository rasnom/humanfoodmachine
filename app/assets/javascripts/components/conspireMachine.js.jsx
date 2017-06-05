var ConspireMachine = React.createClass({

  getDefaultProps: function() {
    return {
      title: "Conspire",
      description: "A machine that requires multiple people to use."
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
