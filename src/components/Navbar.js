import React from "react";
import {Link,NavLink, useHistory} from "react-router-dom";
const Navbar = () => {
  let user =JSON.parse(localStorage.getItem('user-info'))
  const history=useHistory();
  function logout()
  {
    localStorage.clear();
    history.push('/Login')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link"excat to="/Home">
                Home
              </NavLink>
              </li>
              
              
                
              
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/AddUser">Add User</Link>
        <button onClick={logout} className="btn btn-primary">Logout</button>
        

      </div>
    </nav>

  )
}
export default Navbar;