

var ConspireMachine = React.createClass({
  getInitialState: function() {
    return {
      selection: null,
      pubnub: this.setUpPubnub(['something'])
    }
  },

  setUpPubnub: function(listen_channels) {
    connection = new PubNub({
      publishKey : 'demo',
      subscribeKey : 'demo'
    });

    connection.addListener({
      message: function(message) {
        console.log('New Message! ', message);
      }
    });

    connection.subscribe({
        channels: listen_channels
    });
    return connection;
  },

  getDefaultProps: function() {
    return {
      title: 'Conspire',
      description: 'A machine that requires multiple people to use.'
    }
  },

  handleSelection: function(e) {
    this.setState({selection: e.target.value});
    this.state.pubnub.publish({
        message: 'switched!',
        channel: 'something'
      },
      function(status, response) {
        if (status.error) {
            // handle error
            console.log(status)
        } else {
            console.log("switch message Published w/ timetoken", response.timetoken)
        }
      }
    );
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
      alert ('you got a ' + this.state.selection)
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
