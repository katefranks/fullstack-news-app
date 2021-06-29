import { Component } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';

class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
        selection: !! Cookies.get('Authorization') ? 'profile' : 'login'
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleNavigation = this.handleNavigation.bind(this);
      this.handleRegistration = this.handleRegistration.bind(this);
  }
  handleNavigation(selection){
    this.setState({ selection });
  }

  async handleLogin(user){
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
    },
    body: JSON.stringify(user),
  };
  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/login/', options).catch(handleError);

  if(response.ok){
    const data = await response.json().catch(handleError);
    Cookies.set('Authorization', `Token ${data.key}`);
    this.setState({ selection : 'profile' });
  } else {
    alert('Incorrect Username or Password, Please Try Again!')
  }
}

async handleRegistration(user){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken' : Cookies.get('csrftoken')
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/ registration/', options).catch(handleError);

  if(response.ok){
    const data = await response.json().catch(handleError);

    Cookies.set('Authorization', `Token ${data.key}`);
    this.setState({ selection : 'profile'});
  } else {
    //throw error
  }
}

async handleLogout(){
  const options = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  };
  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/logout/', options).catch(handleError);

  if(response.ok){
    Cookies.remove('Authorization');
    this.setState({ selection: 'login' });
  }
}

//for logout add button and set selection to 'logout'
  render(){
    let html;

    if(this.state.selection === 'register') {
      html = <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation} />;
    } else if (this.state.selection === 'login') {
      html = <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />;
    } else {
      html = <Profile handleLogout={this.handleLogout} />
    }

  return (
    <>
    <div>
      {html}
    </div>


    </>
  );
}
}

export default App;


// implement authetication.  Can override the perform create like last week.
// a user can only create one profile- implement logic to say that you can only create a profile once, but you can edit it as much as you want (put request to edit).   If they don't have a profile- do a POST request to CREATE profile.
// override to say the person making the request is the one we need to create a profile for- override the perform create



// before breaking out into profile component:
// import { Component } from 'react';
// import './App.css';
// import Cookies from 'js-cookie';
// import Registration from './Registration';
// import Login from './Login';
// import Profile from './Profile';
//
// class App extends Component{
//   constructor(props) {
//     super(props);
//       this.state = {
//         display_name: '',
//         avatar: null,
//         preview: '',
//       }
//       this.handleInput = this.handleInput.bind(this);
//       this.handleImage = this.handleImage.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//
//       this.handleNavigation = this.handleNavigation.bind(this);
//       this.handleRegistration = this.handleRegistration.bind(this);
//   }
//   handleInput(e){
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   handleImage(e){
//     let file = e.target.files[0];
//     this.setState({
//       [e.target.name]: file,
//       // same as:   avatar: file,
//       // specifically targeting the first file (index- 0). Take the file we selected and set that on state.
//     // the way to target what we select is going to be with the files attribute
//     });
//
//         // this will allow us to asynchronously read a file. In this case it allows us to read a file.  Then we tell it what to do when it's finished reading:
//     let reader = new FileReader();
//     reader.onloadend = () => {
//       this.setState({
//         preview: reader.result,
//       });
//   }
//     reader.readAsDataURL(file);
//       // this gives us back a data url that we can use as a src attribute on our image tag. Using this as an src below to show the image to the client.
//   }
//
//   async handleSubmit(e) {
//     e.preventDefault();
//     let formData = new FormData();
//     // using formData bc we're sending up JSON & the images. This is a constructor, allows us to write key/value pairs.
//     formData.append('avatar', this.state.avatar);
//     formData.append('display_name', this.state.display_name);
//     formData.append('user', 1);  // this is hardcoded- admin has id of 1
//
//     const options = {
//       method: 'POST',
//       headers: {
//         'X-CSRFToken': Cookies.get('csrftoken'),
//       },
//       body: formData,
//       //hard coding the above for right now
//     }
//     const response =  await fetch ('/api/v1/users/profiles/', options);
//     console.log(response);
//   }
//
//   render(){
//   return (
//     <>
//     <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation} />
//     <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />
//     <Profile />
//     </>
//   );
// }
// }
//
// export default App;
