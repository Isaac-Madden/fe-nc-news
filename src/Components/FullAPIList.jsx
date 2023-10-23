import { useState, useEffect } from "react"
import { FullAPIList } from "./API"

    export const APIList = () => {

    const [apis, setAPIs] = useState({})

    useEffect( () => {
        FullAPIList().then( response => {
            setAPIs(response.data.fetchEndPoints) }) 
            
    }, [])

    let APIarray = []

    for (const api in apis){
        APIarray.push(api)
    }

    return (
        <>
            <h2>Here's a list of available API endpoints:</h2>
            <ol>
                {APIarray.map( (api) => { return <li key={api} > {api} </li> } )}
            </ol>
            <h3>These are available on the https://maddens-news.onrender.com path</h3>
            <h4>(i.e. https://maddens-news.onrender.com/api/topics)</h4>
        </>
    )
}