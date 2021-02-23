import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    !(this.state.username === "" || this.state.password === "") ? this.props.handleLogin(this.state) : "empty"  
    
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              value={this.state.username}
              type="text"
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;



//We destructure when we assign values (pulling values out) not when we're calling a function. 