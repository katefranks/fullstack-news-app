import { Component } from 'react';
import './App.css';
import ArticleForm from './ArticleForm'
import Cookies from 'js-cookie';

class Articles extends Component {
  constructor(props){
    super(props);
      this.state = {
        articles: [],
      }
    // this.addArticle = this.addArticle.bind(this)
  }


render(){

    return(
      <>
      <h1>Articles</h1>
      < ArticleForm />
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
