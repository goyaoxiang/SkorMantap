import React from "react";
import { TutorNavbar } from "../../components/Navbar/Navbar";
import "../../index.css";
import "./TutorDashboard.css";
import BarChart from "./BarChart.jpg";
import LineChart from "./LineChart.jpg";
import PieChart from "./PieChart.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const TutorDashboard = () => {
  return (
    <div className="tutor-dashboard">
      <TutorNavbar />

      <div className="index">
        <div className="overview">
          <div className="statistic-area">
            <div className="barchart">
              <img src={BarChart} className="chart" alt="BarChart" />
            </div>
            <div className="piechart">
              <img src={PieChart} className="chart" alt="PieChart" />
            </div>
            <div className="linechart">
              <img src={LineChart} className="chart" alt="LineChart" />
            </div>
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
      <Footer />
    </div>
  );
};

export default TutorDashboard;
