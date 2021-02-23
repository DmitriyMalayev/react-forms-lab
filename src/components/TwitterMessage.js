import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    console.log("Event Target Name", event.target.message);
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    //We have access to state and props
    const messageNumber = this.state.message.length;

    console.log("state", this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          value={this.state.message}
          id="message"
          onChange={this.handleChange}
        />
        {this.props.maxChars - messageNumber}
      </div>
    );
  }
}

export default TwitterMessage;
