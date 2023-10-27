import { useState, useEffect } from "react";
import { getAllArticles } from "../../API";
import { ArticleCard } from "./ArticleCard";
import { SortingNavBar } from "../SortingComponents/SortingNavBar";
import { OrderBy } from "../SortingComponents/OrderBy";
import { SortByComponent } from "../SortingComponents/SortByComponent";

export const ListOfArticles = () => {

    const [articles, setArticles] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [articleOrder, setArticleOrder] = useState("desc")
    const [sortby, setSortBy] = useState("votes") // shows most popular articles first by default

    useEffect( () => {
        setLoadingStatus(true)

        getAllArticles(articleOrder, sortby).then( response => {
            setArticles(response.data.articles) 
            setLoadingStatus(false)
        }) 
        
    }, [articleOrder, sortby])

    if (loadingStatus === true) { return <p> Loading articles... </p>}  // handling delay waiting for data from api

    return (
        <>
        <SortingNavBar />
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