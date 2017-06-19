var ConspireMomentarySwitch = React.createClass({
  getDefaultProps: function() {
    return {
      label: "generic momentary switch",
      action: console.log.bind(console, "generic button pressed")
    }
  },

  render: function() {
    return (
      <button
        value={this.props.label}
        onClick={this.props.action}
      >
        {this.props.label}
      </button>
    )
  }
})

