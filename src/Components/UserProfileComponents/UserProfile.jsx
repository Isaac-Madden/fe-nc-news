import { useContext } from "react"

import { User } from "../../Contexts/User"

export const UserProfile = () => {
    const { currentUser } = useContext(User);

    return(
        <div className="UserProfile">
        <h2>Hi {currentUser}!</h2>
        <h3>Thanks for using this ace news app </h3>
        </div>
    )
    
}