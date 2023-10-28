import { useEffect, useState } from "react";
import { getTopics } from "../../API";

export const FilterByTopic = ( {setTopic} ) => {
 const [topics, setTopics] = useState([])
 const [loadingStatus, setLoadingStatus] = useState(true);

 useEffect(() => {
    setLoadingStatus(true)
    getTopics().then(response => {setTopics(response.data.topics); setLoadingStatus(false)})
 }, [])

 if (loadingStatus === true) { return <p> Loading topics... </p>}  // handling delay waiting for data from api

 return (
    <form className="filter-container">
            <label htmlFor="sortByTopic">Filter by Topic: </label>
            <select
                onChange={event => {setTopic(event.target.value)}}name=""id="sortByTopic">
                <option>all</option>
                {topics.map(topic => {return <option key={topic.slug}>{topic.slug}</option>})}
            </select>
    </form>
 )
}