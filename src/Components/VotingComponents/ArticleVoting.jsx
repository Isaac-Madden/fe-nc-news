import { useState } from "react";
import { patchArticleVotes } from "../../API";

export const ArticleVoting = ({ votes, article_id }) => {

 const [userVotes, setUserVotes] = useState(0);
 const [error, setError] = useState(false)

 const votesAPICall = (userVotes, article_id) => {
    patchArticleVotes(userVotes, article_id)
    .then(() => {
      return (
         <>
          <div>Votes: {userVotes + votes}</div>
          <p> Thanks for voting! </p>
         </>
      ) 
    })
    .catch( () => {  
      setUserVotes(0)
      setError(true)
   })
 }

 function updateVotes(value){
    setUserVotes(userVotes + value)
    votesAPICall(value, article_id)
 }

 return (
  <>
   <div>Votes: {userVotes + votes}</div>
   <button disabled={userVotes === -1} onClick={() => {updateVotes(-1)}}>-</button>
   <button disabled={userVotes === 1} onClick={() => {updateVotes(1)}}>+</button>

   {error? <p> Sorry voting is currently unavailable! </p>: <></> }
  </>
 )
}