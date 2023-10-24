import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../API";
import { SingleArticleCard } from "./SingleArticleCard";
import { ArticleCommentsList } from "../CommentsComponents/ArticleCommentsList";

export const SingleArticle = () => {
 const [singleArticle, setSingleArticle] = useState({});
 const [loadingStatus, setLoadingStatus] = useState(true);
 const { article_id } = useParams();

 useEffect(() => {
    setLoadingStatus(true)
    getArticleByID(article_id).then(response => {
    setSingleArticle(response.data.article);
    setLoadingStatus(false);
  });
 }, []);

 if (loadingStatus === true) {return <p> Loading article... </p> }

 return (
  <>
   <SingleArticleCard singleArticle={singleArticle} />
   <ArticleCommentsList article_id={singleArticle.article_id} />
  </>
 )
}