import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../../API";
import { ArticleCard } from "./ArticleCard";

import { OrderBy } from "../SortingComponents/OrderBy";
import { SortByComponent } from "../SortingComponents/SortByComponent";

export const ArticlesByTopic = () => {
    const { topic_name } = useParams()
    const [articles, setArticles] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [topic, setTopic] = useState(topic_name)
    const [error, setError] = useState(false)

    const [articleOrder, setArticleOrder] = useState("desc")
    const [sortby, setSortBy] = useState("votes") // shows most popular articles first by default

    useEffect( () => {
        setLoadingStatus(true)

        getArticlesByTopic(topic, articleOrder, sortby)
        .then( response => {
            setArticles(response.data.articles) 
            setLoadingStatus(false)
        }) 
        .catch( () => setError(true))
        
    }, [articleOrder, sortby])

    if (loadingStatus === true) { return <p> Loading articles... </p>}  // handling delay waiting for data from api
    if (error === true) { return <p> Sorry, we're currently unable to load articles... </p>}  
    if (articles.length === 0) { return <p> No {topic_name} articles available! </p>}  

    return ( 
        <>
        <OrderBy articleOrder={articleOrder} setArticleOrder={setArticleOrder}/>
        <SortByComponent sortBy={sortby} setSortBy={setSortBy}/>

        <div className="ArticleList"> 
            <h2>Heres a list of our {topic_name} articles</h2>
            <ol>
                {articles.map( (article) => { 
                    return <li key={article.article_id} > <ArticleCard article={article} /> </li> 
                } )}
            </ol>
        </div>
        </>
    )

}