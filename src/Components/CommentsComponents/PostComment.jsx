import { useState, useEffect } from "react";
import { postCommentByArticleID } from "../../API";

export const PostComment = ({ article_id }) => {

 const [userName, setUserName] = useState("")
 const [userComment, setUserComment] = useState("")
 const [commentToPost, setCommentToPost] = useState(null)
 const [commentLoaded, setCommentLoaded] = useState(false)

 useEffect(() => {

   if (commentToPost === null) {return} // blocks inital call on render

    postCommentByArticleID(article_id, commentToPost)
    .then( response => {setCommentLoaded("posted")} )
    .catch(  error => {setCommentLoaded("error")} )
 }, [commentToPost])

   if (commentLoaded=== "posted") return (<h3>Comment added: {userComment} </h3>)
   if (commentLoaded=== "error") return (<h3>Unable to post a comment at this time</h3>)

 return (
   <div className="commentComponent">
      <h2>Post a comment!</h2>
      <form onSubmit={ (event)=> {event.preventDefault(); setCommentToPost( {username: userName, body: userComment}  )}}>
         <label>Name:</label>
         <input required value={userName} onChange={ event => setUserName(event.target.value) }/>
         <label>Comment:</label>
         <input required value={userComment} onChange={ event => setUserComment(event.target.value) }/>
         <button type="submit">Submit</button>
      </form>
    </div>
 )
}