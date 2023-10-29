import { useEffect, useState } from "react";
import { getTopics } from "../../API";

export const FilterByTopic = ( {topic, setTopic, firstRender, setFirstRender} ) => {
 const [topics, setTopics] = useState([])
 const [loadingStatus, setLoadingStatus] = useState(true)

 useEffect(() => {
    setLoadingStatus(true)
    getTopics().then(response => {setTopics(response.data.topics); setLoadingStatus(false)})
 }, [firstRender])

 if (loadingStatus === true) { return <p> Loading topics... </p>}  // handling delay waiting for data from api

 if(firstRender === true){ return (
   <form className="filter-container">
           <label htmlFor="sortByTopic">Filter by Topic: </label>
           <select
               onChange={event => {setTopic(event.target.value); setFirstRender(false)}} id="sortByTopic">
               <option>all</option>
               {topics.map(topic => {return <option key={topic.slug} value={topic.slug} >{topic.slug}</option>})}
           </select>
   </form>
 )}

 if (firstRender === false) {return (
    <form className="filter-container">
            <label htmlFor="sortByTopic">Filter by Topic: </label>
            <select
                onChange={event => {setTopic(event.target.value); setFirstRender(false)}} id="sortByTopic">
                <option value={topic}>{topic}</option>
                <option>all</option>
                {topics.map(individualtopic => {
                  if(individualtopic.slug !== topic){
                  return <option key={individualtopic.slug} value={individualtopic.slug} >{individualtopic.slug}</option>
               }})}
            </select>
    </form>
 )}


}