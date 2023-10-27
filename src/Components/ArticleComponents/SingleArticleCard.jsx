export const SingleArticleCard = ({singleArticle}) => {

    return (
        <>
            <h1>Title: {singleArticle.title}</h1>
            <p>Author: {singleArticle.author}</p>
            <p>Topic: {singleArticle.topic}</p>
            <p>Date Published: {singleArticle.created_at.slice(8, 10)}{singleArticle.created_at.slice(4, 8)}{singleArticle.created_at.slice(0, 4)}</p> 
            <p>Body: {singleArticle.body}</p>
            <p>Number of comments: {singleArticle.comment_count}</p>
            <img src={singleArticle.article_img_url}></img>
      </>
    )
}
