import React from "react";
import logo from "../../assets/images/public/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const TutorNavbar = () => {
  return (
    <section>
      <div className="navbar">
        <div className="navleft">
          <ul>
            <li>
              <Link to="/tutor">
                <img className="logo" src={logo} alt="SkorMantap" />
              </Link>
            </li>
            <li>
              <Link to="/tutor">Dashboard</Link>
            </li>
            <li>
              <Link to="/tutor/course_overview">Courses</Link>
            </li>
          </ul>
        </div>
        <div className="navright">
          <ul>
            <li>
              <a href="#">Language</a>
            </li>
            <li>
              <Link to="/tutor">
                <img className="logo" src={logo} alt="User Profile" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// export default TutorNavbar;

export function StudentNavbar() {
  return (
    <section>
      <div className="navbar">
        <div className="navleft">
          <ul>
            <li>
              <Link to="/student">
                <img className="logo" src={logo} alt="SkorMantap" />
              </Link>
            </li>
            <li>
              <Link to="/student">Dashboard</Link>
            </li>
            <li>
              <Link to="/student/courses">Courses</Link>
            </li>
          </ul>
        </div>

        <div className="navright">
          <ul>
            <li>
              <a href="#">Language</a>
            </li>
            <li>
              <Link to="/student">
                <img className="logo" src={logo} alt="User Profile" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// export default Navbar;

export function ParentNavbar() {
  return (
    <div className="navbar">
      <div className="navleft">
        <ul>
          <li>
            <Link to="/parent">
              <img className="logo" src={logo} alt="SkorMantap" />
            </Link>
          </li>
          <li>
            <Link to="/parent">Dashboard</Link>
          </li>
          <li>
            <Link to="/parent/children_list">Children</Link>
          </li>
          <li>
            <Link to="/student/courses">Courses</Link>
          </li>
        </ul>
      </div>

      <div className="navright">
        <ul>
          <li>
            <a href="#">Language</a>
          </li>
          <li>
            <Link to="/parent">
              <img className="logo" src={logo} alt="User Profile" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
