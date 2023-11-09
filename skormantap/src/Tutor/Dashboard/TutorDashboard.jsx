import React from "react";
import TutorNavbar from "../Navbar/Navbar";
import "./TutorDashboard.css";
import { Link } from "react-router-dom";

const TutorDashboard = () => {
  return (
    <div className="tutor-dashboard">
      <TutorNavbar />

      <div className="index">
        <div className="overview">
          <div className="announcement-area">
            <p className="announcement-area-text">
              Announcement Area Like E-learn USM
              <br />
              can be a reminder like what is the upcoming classNamees
            </p>
            <p className="student-overview-area">
              Overview about total students enrolled
            </p>
          </div>
        </div>
        <div className="enrolled-courses-area">
          <div className="title-courses">
            <h1>COURSES</h1>
          </div>
          <div className="courses-area">
            <div className="title">
              <h2>SELF-PACED COURSES</h2>
            </div>
            <div className="courses">
              <ul>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="courses-area">
            <div className="title">
              <h2>ONLINE COURSES</h2>
            </div>
            <div className="courses">
              <ul>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
                <li>
                  <Link to="/tutor/course_dashboard">Form 1 Mathematics</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
