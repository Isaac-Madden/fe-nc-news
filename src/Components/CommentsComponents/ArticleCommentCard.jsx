import { useState, useContext } from "react"
import { deleteCommentByCommentID } from "../../API"
import { User } from "../../Contexts/User";

// delete comment functionality isn't very dry - needs to be refactored at some point - see PostComment.jsx

export const ArticleCommentCard = ({comment}) => {
    const [deleteStatus, setDeleteStatus] = useState(null);
    const { currentUser } = useContext(User);

    function deleteComment(comment_id) {
        deleteCommentByCommentID(comment_id)
        .then( () => {
            setDeleteStatus(true)
        })
        .catch(error => {
            setDeleteStatus(false)
            
        })
    }
    
    if(deleteStatus === true) return (<p>comment deleted!</p>)
    if(deleteStatus === false) return (<p>sorry we're unable to delete this comment, try again later</p>)

    return (
        <>
            <ol className="commentCard">
                <li><b>Comment: </b>{comment.body}</li>
                <li><b>Comment author: </b>{comment.author}</li>
                <li><b>Comment votes: </b>{comment.votes}</li>
            </ol> 

            {currentUser === comment.author && (
                 <button onClick={ () => deleteComment(comment.comment_id)}>Delete Comment</button>
            )}

           
        </>
    )
}