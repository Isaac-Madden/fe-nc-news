import { useContext, useState, useEffect } from "react"

import { User } from "../../Contexts/User"
import { getUsers } from "../../API";



export const UserProfile = () => {
    const { currentUser } = useContext(User);
    const [userDetails, setUserDetails] = useState([])
    const [userAvatar, setUserAvatar] = useState("")
    const [loadingAvatar, setLoadingAvatar] = useState(true)

    useEffect( () => { 
        getUsers()
        .then( response => { setUserDetails(response.data.users) })
        .then( () => { 
            userDetails.map(  user => {if(user.username === currentUser){setUserAvatar(user.avatar_url)}})
            setLoadingAvatar(false) 
        })
    }, [loadingAvatar])

    if(loadingAvatar === true){
        return(
            <div className="UserProfile">
            <h2>Hi {currentUser}!</h2>
            <p>loading avatar...</p>
            <h3>Thanks for using this ace news app </h3>
            </div>
        )
    }
    
    if(loadingAvatar === false){
    return(
        <div className="UserProfile">
        <h2>Hi {currentUser}!</h2>
        <img className="userAvatar" src={userAvatar}></img>
        <h3>Thanks for using this ace news app </h3>
        </div>
    )
    }
}