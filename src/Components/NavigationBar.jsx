import { Link } from "react-router-dom";

export const NavigationBar = () => {
 
 return (
  <nav>
   <Link to="/"> Home </Link> | <Link to="/viewarticles"> View All Articles </Link> | <Link to="/userprofile"> User Profile</Link>
  </nav>
 )
}