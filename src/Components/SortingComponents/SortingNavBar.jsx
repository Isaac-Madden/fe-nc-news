import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../../API";

export const SortingNavBar = () => {
    const [topics, setTopics] = useState()
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [error, setError] = useState(false)

    useEffect( () => { 
        setLoadingStatus(true)
        getTopics()
        .then( response => {setTopics(response.data.topics); setLoadingStatus(false) })
        .catch( error => {setError(true)})
      }, [])

    if (error === true) { return <p> Sorry, we're unable to return any articles matching that topic </p>} 
    if (loadingStatus === true) { return <p> Loading articles... </p>}  // handling delay waiting for data from api
 
 return (
  <>
  <nav className="SortingNavBar">
    <p>Filter by:</p> {topics.map( (topic) => {return (  <Link to={`../articles/topic/${topic.slug}`} key={topic.slug} className="topicsNav"> {topic.slug} </Link>  )}   )}
  </nav>
  </>
 )
}