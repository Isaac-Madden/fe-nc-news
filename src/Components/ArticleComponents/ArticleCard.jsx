import { Link } from "react-router-dom";

export const ArticleCard = ({article}) => {
    return (
     <div className="ArticleCard">
        <div className="ArticleCardText">
            <p>Title: {article.title}</p>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
        </div>
      <img className="ArticleCardImage" alt={article.topic} src={article.article_img_url}></img>
      <nav className="ArticleCardLink"><Link to={`${article.article_id}`}>See Full Article</Link></nav>
     </div>
    )
}
   