import React from 'react';
import Cookies from 'js-cookie';

class ArticleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: '',
      title: '',
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    this.setState({[e.target.name]: e.target.value});
  }



  handleSubmit(e){
    e.preventDefault();
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(this.state),
      }


      fetch('/api/v1/articles/', options)
        .then(response => response.json())
        .then(data => {
          this.setState({data});
        });

  }

  render(){
    return(
      <div className="article-form-container">
        <p>Create New Article</p>
        <form className="article-form" onSubmit={this.handleSubmit}>
          <label htmlFor="author"></label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleInput} placeholder="author"/>
            <br/>
          <label htmlFor="title"></label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Title"/>
            <br/>
          <label htmlFor="body"></label>
            <input type="text" name="body" value={this.state.body} onChange={this.handleInput} placeholder="Article Content"/>
            <br/>
          <button type="submit" value="Submit">SAVE</button>
        </form>
      </div>
    )
  }
}
export default ArticleForm;
