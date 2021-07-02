import { Component } from 'react';
import './App.css';
import ArticleDetail from './ArticleDetail';

class Articles extends Component {
  constructor(props){
    super(props);
      this.state = {
        articles: [],
        selection: 'null',
      };

    this.selectArticle = this.selectArticle.bind(this);

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
  selectArticle(selection){
    this.setState({ selection });
  }

  render(){
    const articles = this.state.articles.map(article => (
      <ArticleDetail key={article.id} article={article} editArticle={this.editArticle}/>
    ))

      return(
        <>
        <div className="articles-container">
          <h1>Articles</h1>
          <ul>{articles}</ul>
        </div>
        </>
      )
    }
  }

  export default Articles;

// Code before adding message detail! 7/2/21
// render(){
//   const articles = this.state.articles.map(article => (
//     <li key={article.id} >
//       <h2>{article.title}</h2>
//       <p>Author: {article.author}</p>
//       <p>{article.body}</p>
//     </li>
//   ))
//
//     return(
//       <>
//       <div className="articles-container">
//         <h1>Articles</h1>
//         <ul>{articles}</ul>
//       </div>
//       </>
//     )
//   }
// }
//
// export default Articles;

// onClick={() => this.selectArticle('article-content')}
// this.state.selection === 'article-content' &&


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
