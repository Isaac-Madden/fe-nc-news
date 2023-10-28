import { Link } from "react-router-dom";

export const ArticleCard = ({article}) => {
    return (
     <div className="ArticleCard">
        <div className="ArticleCardText">
            <p>Title: {article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>Date posted: {article.created_at.slice(8, 10)}{article.created_at.slice(4, 8)}{article.created_at.slice(0, 4)}</p>
            <p>Votes: {article.votes}</p>     
            <p>Number of comments: {article.comment_count}</p>
        </div>
      <img className="ArticleCardImage" alt={article.topic} src={article.article_img_url}></img>
      <nav className="ArticleCardLink"><Link to={`${article.article_id}`}>See Full Article</Link></nav>
     </div>
    )
}
   