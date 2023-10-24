import { useState, useEffect } from "react";
import { getAllArticles } from "./API";
import { ArticleCard } from "./ArticleComponents/ArticleCard";

export const ListOfArticles = () => {

    const [articles, setArticles] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(true);


    useEffect( () => {
        setLoadingStatus(true)

        getAllArticles().then( response => {
            setArticles(response.data.articles) 
            setLoadingStatus(false)
        }) 
        
    }, [])

    if (loadingStatus === true) { return <p> Loading articles... </p>}  // handling delay waiting for data from api

    return (
        <div className="ArticleList"> 
        <h2>Heres a list of our articles</h2>
        <ol>
            {articles.map( (article) => { 
                return <li key={article.article_id} > <ArticleCard article={article} /> </li> 
            } )}
        </ol>
        </div>
    )
}