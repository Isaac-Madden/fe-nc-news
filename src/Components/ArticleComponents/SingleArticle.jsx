import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SingleArticleCard } from "./SingleArticleCard";
import { ArticleCommentsList } from "../CommentsComponents/ArticleCommentsList";
import { ArticleVoting } from "../VotingComponents/ArticleVoting";
import { getArticleByID } from "../../API";
import { PostComment } from "../CommentsComponents/PostComment";

export const SingleArticle = () => {
 const [singleArticle, setSingleArticle] = useState({});
 const [loadingStatus, setLoadingStatus] = useState(true);
 const { article_id } = useParams()
 const [error, setError] = useState(false)

 useEffect(() => {
    setLoadingStatus(true)

    getArticleByID(article_id)
    .then(response => {setSingleArticle(response.data.article); setLoadingStatus(false)})
    .catch(error => {
      setError(true)
    })
 }, [])

 if (error === true) {return <p> No such article exists! </p> }
 if (loadingStatus === true) {return <p> Loading article... </p> }
 

 return (
  <>
   <SingleArticleCard singleArticle={singleArticle} />
   <ArticleVoting votes={singleArticle.votes} article_id={singleArticle.article_id} />
   <PostComment article_id={singleArticle.article_id} />
   <ArticleCommentsList article_id={singleArticle.article_id} />
  </>
 )
}