import { Component } from 'react';

class ArticleDetail extends Component{


render(){
  const article = this.props.article
  return(
    <li >
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
    </li>
  )
}
}
export default ArticleDetail;
