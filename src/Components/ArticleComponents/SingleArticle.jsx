import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArticleByID } from "../API";
import { SingleArticleCard } from "./SingleArticleCard";

export const SingleArticle = () => {
 const [singleArticle, setSingleArticle] = useState({});
 const [loadingStatus, setLoadingStatus] = useState(true);
 const { article_id } = useParams();

 useEffect(() => {
    setLoadingStatus(true)
    ArticleByID(article_id).then(response => {
    setSingleArticle(response.data.article);
    setLoadingStatus(false);
  });
 }, []);

 if (loadingStatus === true) {return <p> Loading article... </p> }

 return (
  <>
   < SingleArticleCard singleArticle={singleArticle}/>
  </>
 )
}