export const OrderBy = ({setArticleOrder, articleOrder}) => {

    if (articleOrder === "asc") return(
        <button className="orderButton" onClick={ ()=>{ setArticleOrder("desc")} }>Order by decending </button> 
    )

    if (articleOrder === "desc") return(
        <button className="orderButton" onClick={ ()=>{setArticleOrder("asc")} }>Order by ascending</button> 
    )
    
}