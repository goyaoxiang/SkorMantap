import React from "react";
import logo from "../../../public/images/img_image6.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const TutorNavbar = () => {
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
              <a href="#">
                {/* <img src="#" alt="User Profile" /> */}
                User Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TutorNavbar;
