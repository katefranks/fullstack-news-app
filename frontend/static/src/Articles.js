import { Component } from 'react';
import './App.css';
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
      <h1>Hi!</h1>
      </>
    )
  }
}

export default Articles;

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
