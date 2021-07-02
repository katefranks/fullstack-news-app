import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Cookies from 'js-cookie';
import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';
import Articles from './Articles';
import ArticleForm from './ArticleForm';


class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
        selection: 'login',
        // selection: !! Cookies.get('Authorization') ? 'profile' : 'login',
        // view: 'articles',
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
  const response = await fetch('/rest-auth/registration/', options).catch(handleError);

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

render(){
  return (
    <>
    <div>

    </div>
    <nav>
      <button className="nav-bar-button" onClick={() => this.handleNavigation('registration')}>Registration</button>
      <button className="nav-bar-button" onClick={() => this.handleNavigation('login')}>Login</button>
      <button className="nav-bar-button" onClick={() => this.handleNavigation('articles')}>Articles</button>
      <button className="nav-bar-button" onClick={() => this.handleNavigation('profile')}>Profile</button>
      <button className="nav-bar-button" onClick={() => this.handleNavigation('article-form')}>Add Article</button>
    </nav>
    <div>
      {!!Cookies.get('Authorization') && this.state.selection === 'profile' &&
      <Profile selection={this.state.selection} handleNavigation={this.handleNavigation} handleLogin={this.handleLogin} handleLogout={this.handleLogout} /> }

      {!Cookies.get('Authorization') && this.state.selection === 'profile' &&
      <p>Please Register to create a profile!</p> &&
      <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation} />
      }

      {this.state.selection === 'articles' && <Articles selection={this.state.selection} handleNavigation={this.handleNavigation} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>}

      {this.state.selection === 'login' && <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />}

      {this.state.selection === 'registration' && <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation} />}

      {this.state.selection === 'article-form' && <ArticleForm  />}

    </div>
    </>
  );
}
}

export default App;

// {this.state.selection === 'article-detail' && <ArticleDetail />}

// {this.state.selection === 'profile' && <Profile selection={this.state.selection} handleNavigation={this.handleNavigation} handleLogin={this.handleLogin} handleLogout={this.handleLogout} /> }

//REACT ROUTER:
// render (){
//   return (
//      <Router>
//        <div>
//          <nav>
//            <ul>
//              <li>
//                <Link to="/articles">Articles</Link>
//              </li>
//              <li>
//                <Link to="/profile">Profile</Link>
//              </li>
//              <li>
//                <Link to="/login">Login</Link>
//              </li>
//            </ul>
//          </nav>
//
//          <Switch>
//            <Route path="/profile">
//              <Profile />
//            </Route>
//            <Route path="/articles">
//              <Articles />
//            </Route>
//            <Route path="/login">
//              <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />
//            </Route>
//          </Switch>
//        </div>
//      </Router>
//    );
//   }
//
// }
// export default App;
