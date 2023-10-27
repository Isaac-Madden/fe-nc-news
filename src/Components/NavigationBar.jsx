import { Link } from "react-router-dom";

export const NavigationBar = () => {
 
 return (
  <nav className="mainNavBar">
   <Link className="mainNavButtons" to="/"> Home </Link> <Link className="mainNavButtons" to="/articles"> View All Articles </Link> <Link className="mainNavButtons" to="/userprofile"> User Profile</Link>
  </nav>
 )
}