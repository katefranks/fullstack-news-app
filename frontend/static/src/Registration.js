import React from 'react';
// import Cookies from 'js-cookie';

class Registration extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e){
    this.setState( {[e.target.name]: e.target.value} );
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleRegistration(this.state);
  }
  // handleRegistration needs to be created
  //handleNavigation needs to be created

render(){
  return(
    <>
      <form onSubmit={this.handleSubmit}>
        <label>New User? <br/> Register!</label>
          <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
        <label></label>
          <input className="login-input" placeholder="email" name="email" type="email" value={this.state.email} onChange={this.handleInput}/>
        <label></label>
        <input className="login-input" placeholder="password" type="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
        <label></label>
        <input className="login-input" placeholder="re-type password" type="password" name="password2" value={this.state.password2} onChange={this.handleInput}/>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      <button className="toggle-register" onClick={() => this.props.handleNavigation('login') }>Current User Login</button>
    </>
  );
}
}

export default Registration;
