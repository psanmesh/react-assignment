import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>Assignment</Navbar.Brand>
          <div className="nav">
            <Link to="/" className="nav-item">
              Account
            </Link>
            <Link to="/contacts" className="nav-item">
              Contact
            </Link>
          </div>
        </Navbar>
      </div>
    );
  }
}
//
