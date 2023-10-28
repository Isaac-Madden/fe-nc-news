import { useState, useEffect } from "react";
import { getAllArticles, getArticlesByTopic } from "../../API";
import { ArticleCard } from "./ArticleCard";
import { OrderBy } from "../SortingComponents/OrderBy";
import { SortByComponent } from "../SortingComponents/SortByComponent";
import { FilterByTopic } from "../SortingComponents/FilterByTopic";
import { useSearchParams } from "react-router-dom";


export const ListOfArticles = () => {

    const [topic, setTopic] = useState("all")
    const [articles, setArticles] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [articleOrder, setArticleOrder] = useState("desc")
    const [sortby, setSortBy] = useState("votes") // shows most popular articles first by default
    const [searchParams, setSearchParams] = useSearchParams() //used to modify the URL for the current location

    useEffect( () => {
        setLoadingStatus(true)

        if(topic === "all"){
            setSearchParams({ sort_by: sortby, articleOrder })
            getAllArticles(articleOrder, sortby).then( response => {
                setArticles(response.data.articles) 
                setLoadingStatus(false)
            }) 
        }
        
        if(topic !=="all"){
        setSearchParams({ topic, sort_by: sortby, articleOrder })
        getArticlesByTopic(topic, articleOrder, sortby)
        .then( response => {
            setArticles(response.data.articles) 
            setLoadingStatus(false)
        }) 
        }
        
    }, [articleOrder, sortby, topic])

    if (loadingStatus === true) { return <p> Loading articles... </p>}  // handling delay waiting for data from api

    return (
        <>
        <FilterByTopic topic={topic} setTopic={setTopic}/>
        <OrderBy articleOrder={articleOrder} setArticleOrder={setArticleOrder}/>
        <SortByComponent sortBy={sortby} setSortBy={setSortBy}/>

        <div className="ArticleList"> 
            <h2>Heres a list of our articles</h2>
            <ol>
                {articles.map( (article) => { 
                    return <li key={article.article_id} > <ArticleCard article={article} /> </li> 
                } )}
            </ol>
        </div>
        </>
    )
}