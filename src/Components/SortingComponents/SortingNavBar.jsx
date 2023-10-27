import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../../API";

export const SortingNavBar = () => {
    const [topics, setTopics] = useState()
    const [loadingStatus, setLoadingStatus] = useState(true);

    useEffect( () => { 
        setLoadingStatus(true)
        getTopics().then( response => {
        setTopics(response.data.topics)
        setLoadingStatus(false)
    })}, [])

    if (loadingStatus === true) { return <p> Loading articles... </p>}  // handling delay waiting for data from api
 
 return (
  <>
  <nav className="SortingNavBar">
    <p>Filter by:</p> {topics.map( (topic) => {return (  <Link to={`topic/${topic.slug}`} key={topic.slug} className="topicsNav"> {topic.slug} </Link>  )}   )}
  </nav>
  </>
 )
}