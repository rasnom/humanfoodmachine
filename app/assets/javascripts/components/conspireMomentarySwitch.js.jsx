var ConspireMomentarySwitch = React.createClass({
  getDefaultProps: function() {
    return {
      label: "generic momentary switch",
      action: console.log.bind(console, "generic button pressed"),
      release: console.log.bind(console, "... generic button released")
    }
  },

  render: function() {
    return (
      <button
        value = {this.props.label}
        onMouseDown = {this.props.action}
        onMouseUp = {this.props.release}
      >
        {this.props.label}
      </button>
    )
  }
})

