export const ArticleCommentCard = ({comment}) => {

    return (
            <ol className="commentCard">
                <li><b>Comment: </b>{comment.body}</li>
                <li><b>Comment author: </b>{comment.author}</li>
                <li><b>Comment votes: </b>{comment.votes}</li>
            </ol> 
    )
}