

var ConspireMachine = React.createClass({
  incrementPoll: function(label) {
    console.log("in incrementPoll")
    console.log("this")
    console.log(this)
    this.setState(prevState => {
      console.log("prevState")
      console.log(prevState)
      console.log("****** prevState")
      var poll = prevState.selectionPoll;
      console.log("poll -- ");
      console.log(poll);
      poll[label] += 1;
      return { selectionPoll: poll }
    });
  },

  getInitialState: function() {
    var emptyPoll = this.generateEmptyPoll(this.props.stock);

    var that = this;
    var connection = new PubNub({
      publishKey : 'demo',
      subscribeKey : 'demo'
    });
    connection.addListener({
      message: function(message) {
        console.log("in addListener")
        console.log(that)
        console.log("just displayed that")
        that.incrementPoll(message.message)
      }
    });
    connection.subscribe({
        channels: ['something']
    });

    console.log("connection")
    console.log(connection)
    return {
      selection: null,
      selectionPoll: emptyPoll,
      pubnub: connection
    }
  },

  generateEmptyPoll: function(options) {
    var emptyPoll = {};
    options.forEach( function(element) {
      emptyPoll[element] = 0
    });
    return emptyPoll;
  },

  getDefaultProps: function() {
    return {
      title: 'Conspire',
      description: 'A machine that requires multiple people to use.'
    }
  },

  handleSelection: function(e) {
    this.setState({selection: e.target.value});
    this.state.pubnub.publish(
      {
        message: e.target.value,
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
    var that = this;
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
