import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link  to={"/"} className="brand-logo right">
              Home
            </Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to={"/"}>BBC</Link>
              </li>
              <li>
                <Link to={"/abc"}>ABC</Link>
              </li>
              <li>
                <Link to={"/sports"}>BBC Sports</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
