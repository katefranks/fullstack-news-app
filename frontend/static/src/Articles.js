import { Component } from 'react';
import './App.css';

class Articles extends Component {
  constructor(props){
    super(props);
      this.state = {
        articles: [],
      };

    // this.handleInput = this.handleInput.bind(this);

  }

  componentDidMount(){
    fetch('/api/v1/articles/')
      .then(response => {
        if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(data => this.setState({ articles: data }))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }




render(){
  const articles = this.state.articles.map(article => (
    <li key={article.id}>
    <p>{article.title}</p>
    </li>
  ))

    return(
      <>
      <h1>Articles</h1>
      <ul>{articles}</ul>
      </>
    )
  }
}

export default Articles;

// conditional renderinging to see only article form:
// <button className="" onClick={() => this.props.handleNavigation('ArticleForm')}>Create Article</button>
//
// {this.selection === 'ArticleForm' &&  <ArticleForm />}
////////



// handleNavigation={this.props.handleNavigation} selection={this.selection}

// render(){
//     const articles = this.state.articles.map(article => (
//       <ArticleDetail key={article.id} article={article} deleteArticle={this.deleteArticle} editArticle={this.editArticle}/>
//     ));
//     return(
//       <>
//         <ul articles={this.state.articles} className="articles">
//           {articles}
//         </ul>
//         <ArticleForm addArticle={this.addArticle} handleLogout={this.props.handleLogout}/>
//       </>
//     )
//   }
// }
//
// export default Articles;
