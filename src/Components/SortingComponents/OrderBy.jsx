export const OrderBy = ({setArticleOrder, articleOrder}) => {

    if (articleOrder === "asc") return(
        <button onClick={ ()=>{ setArticleOrder("desc")} }>Order by decending </button> 
    )

    if (articleOrder === "desc") return(
        <button onClick={ ()=>{setArticleOrder("asc")} }>Order by ascending</button> 
    )
    
}