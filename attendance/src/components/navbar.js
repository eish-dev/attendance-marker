import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import { Jumbotron } from 'reactstrap';


class Navsbar extends Component {
 render() {
  return (
   <React.Fragment>
    <Navbar dark className="colour1">
     <div className="container">
      <NavbarBrand href="/">Attendance</NavbarBrand>
     </div>
     <div>
      <a className="mr-2 f-color" href="\">Home</a>
      <a className="f-color" href="\">About us</a>
     </div>
    </Navbar>


    <Jumbotron fluid className="colour">
     <div className="container">
      <div className="row row-header">
       <div className="col-12 col-sm-6">
        <h1>Mark your attendance</h1>
        <p className="lead">NOTE:-If you are staff member please click on "Teacher's Login" else if you are a student click on "Student's Login"</p>
       </div>
      </div>
     </div>
    </Jumbotron>
   </React.Fragment>
  );
 }
}

export default Navsbar;