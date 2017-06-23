var ConspireMomentarySwitch = React.createClass({
  getDefaultProps: function() {
    return {
      label: "generic momentary switch",
      action: console.log.bind(console, "generic button pressed"),
      release: console.log.bind(console, "... generic button released"),
      currentlySelected: false
    }
  },

  momentarySwitchStyle: function() {
    if (this.props.currentlySelected) {
      return {color: "green"}
    } else {
      return {color: "black"}
    }
  },

  render: function() {
    return (
      <button
        value = {this.props.label}
        onMouseDown = {this.props.action}
        onMouseUp = {this.props.release}
        style = {this.momentarySwitchStyle()}
      >
        {this.props.label}
      </button>
    )
  }
})

