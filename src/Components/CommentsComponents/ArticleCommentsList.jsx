import { useEffect } from "react";
import { useState } from "react";
import { getCommentsByArticleByID } from "../API";
import { ArticleCommentCard } from "./ArticleCommentCard";

export const ArticleCommentsList = ({ article_id }) => {
   
 const [comments, setComments] = useState([]);
 const [loadingStatus, setLoadingStatus] = useState(true);

 useEffect(() => {

    setLoadingStatus(true)

    getCommentsByArticleByID(article_id)
    .then(response => {
    setComments(response.data.comments)
    setLoadingStatus(false)
    })

 }, []);

 if (loadingStatus === true) {return <p> Loading article comments... </p> }

 if (comments.length === 0) {return (
   <>
      <h3>Comments: </h3>
      <p> Be the first to add a comment! </p> 
   </>
   )}

 return (
    <>
    <h3>Comments: </h3>
    <ol className="comments-list">
    
    {comments.map((comment) => {

    return (
      <div key={comment.comment_id}>
        < ArticleCommentCard comment={comment} />
      </div>
    )})}
  
    </ol>

  </>
 )
}