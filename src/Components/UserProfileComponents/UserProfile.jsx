import { useContext, useState, useEffect } from "react"

import { User } from "../../Contexts/User"
import { getUsers } from "../../API";



export const UserProfile = () => {
    const { currentUser } = useContext(User);
    const [userDetails, setUserDetails] = useState({})

    useEffect( () => { 
        getUsers().then( response => { setUserDetails(response.data.users) })
    }, []) // will use this to add an image to the User Profile

    return(
        <div className="UserProfile">
        <h2>Hi {currentUser}!</h2>
        <h3>Thanks for using this ace news app </h3>
        </div>
    )
    
}