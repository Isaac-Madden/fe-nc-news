import { useState, useEffect, useContext } from "react";
import { postCommentByArticleID } from "../../API";
import { deleteCommentByCommentID } from "../../API"
import { User } from "../../Contexts/User";

// delete comment functionality isn't very dry - needs to be refactored at some point - see ArticleCommentCard.jsx

export const PostComment = ({ article_id }) => {
 const { currentUser } = useContext(User);

 const [userComment, setUserComment] = useState("")
 const [commentToPost, setCommentToPost] = useState(null)
 const [commentLoaded, setCommentLoaded] = useState(false)
 const [postedComment, setPostedComment] = useState({})
 const [deleteStatus, setDeleteStatus] = useState(null);
 const [loadingDeleteComment, setLoadingDeleteComment] = useState(false);

 useEffect(() => {

   if (commentToPost === null) {return} // blocks inital call on render

    postCommentByArticleID(article_id, commentToPost)
    .then( response => {
      setPostedComment(response.data.comment_added)
      setCommentLoaded("posted")} )
    .catch(  error => { setCommentLoaded("error")} )
 }, [commentToPost])


 function deleteComment(comment_id) {
  setLoadingDeleteComment(true)

  deleteCommentByCommentID(comment_id)
  .then( () => {
      setDeleteStatus(true)
      setLoadingDeleteComment(false)
  })
  .catch(error => {
      setDeleteStatus(false)
      
  })
}

  if(loadingDeleteComment === true) return (<p>deleting comment...</p>)
  if(deleteStatus === true) return (<p>comment deleted!</p>)
  if(deleteStatus === false && currentUser === null) return (<p>You need to login to delete a comment!</p>)
  if(deleteStatus === false && currentUser) return (
    <>
    <p>Sorry we're unable to delete this comment, try again later</p>
    <button onClick={ () => deleteComment(postedComment.comment_id)}>Delete Comment</button>
    </>
  )
  
   if (commentLoaded === "posted") return (
    <>
    <h3>Comment added!</h3>

    <ol className="commentCard">
      <li><b>Comment: </b>{postedComment.body}</li>
      <li><b>Comment author: </b>{postedComment.author}</li>
      <li><b>Comment votes: </b>{postedComment.votes}</li>
      <li><b>Comment ID: </b>{postedComment.comment_id}</li>
    </ol> 

    <button onClick={ () => deleteComment(postedComment.comment_id)}>Delete Comment</button>
    </>
   )

   if (commentLoaded=== "error") return (<h3>Unable to post a comment at this time</h3>)

 return (
   <div className="commentComponent">
      <h2>Post a comment!</h2>
      <form onSubmit={ (event)=> {event.preventDefault(); setCommentToPost( {username: currentUser, body: userComment}  )}}>
         <label>Comment:</label>
         <input required value={userComment} onChange={ event => setUserComment(event.target.value) }/>
         <button type="submit">Submit</button>
      </form>
    </div>
 )
}