import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
  <nav>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/reviews">
      Reviews
    </NavLink>
    <NavLink to="/create-review">
      Create Review
    </NavLink>
  </nav>
  )
}


export default Nav