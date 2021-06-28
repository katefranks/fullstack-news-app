import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }
  // need to add handleLogin

render(){
  return (
    <>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="login">Login:</label>
        <input placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
        <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
        <button className="submit-button" type="submit">Submit</button>
        </form>
        <button onClick={() => this.props.handleNavigation('register')}>Create New Account</button>
    </>
  );
}
}
export default Login;
