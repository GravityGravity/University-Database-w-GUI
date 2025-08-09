import "./Navbar.css";
import { globalRole } from "./user";
import { changeRoleToUser } from "./user";

interface Props {
  Labels: string[];
  RoleLabel: string;
}

function NavBar() {
  var dis = "disabled";
  var path = window.location.pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src="./src/assets/racoon.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          ></img>
          University Information System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <UserRoleButton></UserRoleButton>
          <ul className="navbar-nav nav-underline ms-auto">
            <li className="nav-item">
              <CustomLink href="/gpacalculator">GPA Tool</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink href="/dataview">Data Tool</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink href="/dataedit">Data Edit</CustomLink>
            </li>
              {logout()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function UserRoleButton() {
  switch (globalRole) {
    case "User":
      return (
        <div className="card text-center px-3 Usercard">
          You are a <b>USER</b>
        </div>
      );
    case "Student":
      return (
        <div className="card text-center px-3 Studentcard">
          You are a <b>STUDENT</b>
        </div>
      );
    case "Staff":
      return (
       
        <div className="card text-center px-3 Staffcard">
          You are a <b>STAFF</b>
        </div>
 
      );
    case "Advisor":
      return (
      
        <div className="card text-center px-3 Advisorcard">
          You are an <b>ADVISOR</b>
        </div>

      );
    case "Instructor":
      return (

        <div className="card text-center px-3 Instructorcard">
          You are a <b>INSTRUCTOR</b>
        </div>

      );
  }
}

function logout() {

  if (globalRole === 'User') {
    return     (   
  <li className="nav-item">
    <CustomLink href="/login">Log in</CustomLink>
  </li>
    );
  }
  else {
    return (
      <li className="nav-item">
      <button type="button" className="btn btn-outline-secondary" onClick={changeRoleToUser}>Log Out</button>
      </li>
    );
  }


}

function CustomLink({ href, children }) {
  let path = window.location.pathname;

  return (
    <a className={path === href ? "nav-link active" : "nav-link"} href={href}>
      {children}
    </a>
  );
}

export default NavBar;
