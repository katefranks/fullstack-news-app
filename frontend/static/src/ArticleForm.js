import React from 'react';

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
    this.props.addArticle(this.state);
    this.setState({author: ''});
    this.setState({title: ''})
    this.setState({body: ''})
  }

  render(){
    return(
      <div className="article-form-container">
        <p>Create New Article</p>
        <form className="article-form">
          <label htmlFor="author"></label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleInput} placeholder="author"/>
          <label htmlFor="title"></label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Title"/>
          <label htmlFor="body"></label>
            <input type="text" name="body" value={this.state.body} onChange={this.handleInput} placeholder="Article Content"/>
          <button type="submit" value="Submit">SAVE</button>
        </form>
      </div>
    )
  }
}
export default ArticleForm;
