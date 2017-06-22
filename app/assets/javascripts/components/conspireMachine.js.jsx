

var ConspireMachine = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Conspire',
      description: 'A machine that requires multiple people to use.',
      channel: 'something'
    }
  },

  getInitialState: function() {
    var that = this;
    var connection = new PubNub({
      publishKey : 'demo',
      subscribeKey : 'demo'
    });
    connection.addListener({
      message: function(message) {
        if (that.props.stock.includes(message.message)) {
          that.setState({selection: message.message});
        } else {
          that.setState({selection: null});
        }
        console.log(that.state.selection)
      }
    });
    connection.subscribe({
        channels: [this.props.channel]
    });

    // console.log("connection")
    // console.log(connection)
    return {
      selection: null,
      pubnub: connection
    }
  },

  // componentWillUnmount: function() {
  //   console.log("unmounting conspire component");

  // },

  makeSelection: function(e) {
    this.state.pubnub.publish(
      {
        message: e.target.value,
        channel: this.props.channel
      },
      function(status, response) {
        if (status.error) {
            // handle error
            console.log("error: ");
            console.log(status);
        } else {
            // console.log("switch message Published w/ timetoken", response.timetoken);
        }
      }
    );
  },

  clearSelection: function() {
    this.state.pubnub.publish(
      {
        message: "clear the selection",
        channel: this.props.channel
      },
      function(status, response) {
        if (status.error) {
          // handle error
          console.log("error:");
          console.log(status);
        } else {
          // console.log("clear selection message Published w/ timetoken", response.timetoken);
        }
      }
    )
  },

  displayOptions: function() {
    var that = this;
    return (
      <ul>
        {this.props.stock.map( function(item) {
          return (
             <li>
              <ConspireMomentarySwitch
                label = {item}
                action = {that.makeSelection}
                release = {that.clearSelection}
                currentlySelected = {item == that.state.selection}
              >
              </ConspireMomentarySwitch>
            </li>
          )
        })}
      </ul>
    )
  },

  handleSubmit: function() {
    if (this.state.selection != null) {
      alert ('you got a ' + this.state.selection)
    } else {
      alert ('an item must be selected at the time of submission')
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
