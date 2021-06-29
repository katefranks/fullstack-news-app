import { Component } from 'react';
import './App.css';
import Cookies from 'js-cookie';

class Profile extends Component{
  constructor(props) {
    super(props);
      this.state = {
        display_name: '',
        avatar: null,
        preview: '',
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleImage = this.handleImage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  handleImage(e){
    let file = e.target.files[0];
    this.setState({
      [e.target.name]: file,
      // same as:   avatar: file,
      // specifically targeting the first file (index- 0). Take the file we selected and set that on state.
    // the way to target what we select is going to be with the files attribute
    });

        // this will allow us to asynchronously read a file. In this case it allows us to read a file.  Then we tell it what to do when it's finished reading:
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
  }
    reader.readAsDataURL(file);
      // this gives us back a data url that we can use as a src attribute on our image tag. Using this as an src below to show the image to the client.
  }

  async handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    // using formData bc we're sending up JSON & the images. This is a constructor, allows us to write key/value pairs.
    formData.append('avatar', this.state.avatar);
    formData.append('display_name', this.state.display_name);
    // formData.append('user', this.user);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
      //hard coding the above for right now
    }
    const response =  await fetch ('/api/v1/users/profiles/', options);
    console.log(response);
  }

  render(){
  return (
    <>
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput}/>
      <input type="file" name="avatar" onChange={this.handleImage}/>

      {this.state.avatar
        ? <img src={this.state.preview} alt=""/>
        : null
      }
        <button type="submit">Save Profile!</button>
        <button className="form-button" onClick={this.props.handleLogout}>Logout</button>
    </form>
    </>
  );
}
}

export default Profile;
