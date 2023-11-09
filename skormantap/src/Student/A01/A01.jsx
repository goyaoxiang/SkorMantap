// import "../../index.css";
import React from "react";
import "./A01.css";
import logo from "../../../public/images/img_image6.png";
import man from "./mr bean photo.jpg";
import { Link } from "react-router-dom";
// import "../iconfont/iconfont.css";

export const A01 = () => {
  return (
    <div className="C01">
      <section>
        <div className="navbar">
          <div className="navleft">
            <ul>
              <li>
                <a href="#">
                  <img src={logo} alt="SkorMantap" />
                </a>
              </li>
              <li>
                <a href="#">Dashboard</a>
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
                <a href="#">
                  <img src={logo} alt="User Profile" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="childList wrapper">
          <ul>
            <li>
              <a href="#">CHILDREN 1</a>
            </li>
            <li>
              <a href="#">CHILDREN 2</a>
            </li>
            <li>
              <a href="#">+</a>
            </li>
          </ul>
        </div> */}

        <div className="announcement wrapper">
          <div>
            <h4>Announcement(s)</h4>
          </div>
          <div className="frame">
            <div className="content">
              <div className="material">
                <div>
                  <img src={man} alt="man photo" />
                </div>

                <p className="date">14 July 2023</p>
                <p className="title">No class due to public holiday</p>
                <p className="tutor">Mr. Wong Physics</p>
                <div>
                  <p className="text">
                    Please take note that there will be no class on the date
                    mentioned below. Please do not attend the class. Thank you!
                    <a href="#">
                      <p className="read-more">[Read More]</p>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a href="#" className="prev">
              <span className="iconfont">&#xe660;</span>
            </a>
            <a href="#" className="next">
              <span className="iconfont">&#xe65f;</span>
            </a>

            <ol>
              <li></li>
              <li class="active"></li>
              <li></li>
            </ol>

            <span className="more">
              <a href="#">{`More >`}</a>
            </span>
          </div>
        </div>

        <div className="upcoming wrapper">
          <div>
            <h4>Upcoming Classes</h4>
          </div>
          <div className="frame">
            <div className="content">
              <ul>
                <li>
                  <div className="material">
                    <span className="title">Mr. Wong Physics</span>
                    <div className="top">
                      <span className="iconfont calendar">&#xe644;</span>
                      <span className="date">14 July 2023</span>
                    </div>
                    <div className="bottom">
                      <span className="iconfont clock">&#xe74f;</span>
                      <span className="time">7:00 - 11:00pm</span>
                    </div>
                    <span className="details">{`View Details >`}</span>
                  </div>
                </li>
                <li>
                  <div className="material">
                    <span className="title">Mr. Wong Physics</span>
                    <div className="top">
                      <span className="iconfont calendar">&#xe644;</span>
                      <span className="date">14 July 2023</span>
                    </div>
                    <div className="bottom">
                      <span className="iconfont clock">&#xe74f;</span>
                      <span className="time">7:00 - 11:00pm</span>
                    </div>
                    <span className="details">{`View Details >`}</span>
                  </div>
                </li>
                <li>
                  <div className="material">
                    <span className="title">Mr. Wong Physics</span>
                    <div className="top">
                      <span className="iconfont calendar">&#xe644;</span>
                      <span className="date">14 July 2023</span>
                    </div>
                    <div className="bottom">
                      <span className="iconfont clock">&#xe74f;</span>
                      <span className="time">7:00 - 11:00pm</span>
                    </div>
                    <span className="details">{`View Details >`}</span>
                  </div>
                </li>
              </ul>
            </div>

            <a href="#" className="prev">
              <span className="iconfont">&#xe660;</span>
            </a>
            <a href="#" className="next">
              <span className="iconfont">&#xe65f;</span>
            </a>

            <ol>
              <li></li>
              <li class="active"></li>
              <li></li>
            </ol>

            <span className="more">
              <a href="#">{`More >`}</a>
            </span>
          </div>
        </div>

        <div className="result wrapper">
          <div>
            <h4>Assessment Results(s)</h4>
          </div>

          <div className="frame">
            <span className="data">No data Found</span>

            <span className="more">
              <a href="#">{`More >`}</a>
            </span>
          </div>
        </div>

        <div className="enrolled wrapper">
          <div id="enrolled-courses">
            <h4>Enrolled Course(s)</h4>
          </div>

          <div className="frame">
            <div className="mode">
              <span className="title">
                <a href="#">
                  <span>{`—`}</span>
                </a>
                <p>Online Courses</p>
              </span>

              <ul>
                <li>
                  <Link to="/student/course_dashboard">
                    Wong Physics Wong Physics Wong Physics Wong Physics
                  </Link>
                </li>
                <li>
                  <Link to="/student/course_dashboard">
                    Wong Physics Wong Physics Wong Physics Wong Physics
                  </Link>
                </li>
                <li>
                  <Link to="/student/course_dashboard">
                    Wong Physics Wong Physics Wong Physics Wong Physics
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mode">
              <span className="title">
                <a href="#">
                  <span>{`—`}</span>
                </a>
                <p>Self-paced Courses</p>
              </span>

              <ul>
                <li>
                  <a href="#">
                    Wong Physics Wong Physics Wong Physics Wong Physics
                  </a>
                </li>
                <li>
                  <a href="#">
                    Wong Physics Wong Physics Wong Physics Wong Physics
                  </a>
                </li>
                <li>
                  <a href="#">
                    Wong Physics Wong Physics Wong Physics Wong Physics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="footer"
          style={{
            marginTop: "50px",
            height: "50px",
            backgroundColor: "#ff7426",
          }}
        ></div>
      </section>
    </div>
  );
};

export default A01;
