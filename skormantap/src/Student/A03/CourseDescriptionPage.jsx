import React from "react";
import { StudentNavbar } from "../../components/Navbar/Navbar";
import "./CourseDescriptionPage.css";
import Tick from "./tick.svg";
import CourseInfoImage from "./CourseInfoImage.png";
import playnowButton from "./playnowButton.png";
import stars from "./5-stars.png";
import stroke from "./stroke.png";
import clock from "./clock.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "components/Footer/Footer";

function A03() {
  return (
    <div>
      <StudentNavbar />
      <CourseDescriptionContent />
      <Footer />
    </div>
  );
}

function TeacherInfoBox() {
  return (
    <div className="TeacherInfoBox-1">
      <img
        src="https://edu.dsgncloud.com/wp-content/uploads/2023/08/Group-339.png"
        alt="Teacher"
        className="TeacherImage"
      />
      <p className="TeacherName">Cynthia A. Nelson</p>
      <p className="TeacherPosition">Professor @George Brown College</p>
      <p className="TeacherDescription">
        Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut
        allquip ex commodo.
      </p>
      <p className="MoreAboutTeacher">More about the teacher</p>
      <ul className="custom-list">
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">10 years experience in teaching</span>
        </li>
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">Cikgu Cemerlang in SMK Cemerlang</span>
        </li>
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">Degree in USM</span>
        </li>
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">Based in Kuala Lumpur, Malaysia</span>
        </li>
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">Caring and loving</span>
        </li>
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">Patient</span>
        </li>
        <li>
          <img src={Tick} className="Tick" />{" "}
          <span className="ListItemText">Engaging and interactive lesson</span>
        </li>
      </ul>
    </div>
  );
}

function CourseInfoBox() {
  return (
    <div>
      <div className="CourseInfoBox-1">
        <h1 className="CourseInfo-Title">FORM 1 MATHEMATICS</h1>
        <div className="ImageContainer">
          <img
            src={CourseInfoImage}
            className="CourseInfo-Image"
            alt="Course Image"
          />
          <img
            src={playnowButton}
            className="CourseInfo-PlayNowButton"
            alt="Play Button"
          />
          <button className="PreviewNow-Button">PREVIEW NOW</button>
        </div>

        <div className="CourseDetails-Info">
          <p className="CourseDetails-Orange">4.5</p>
          <img src={stars} className="CourseInfo-Stars" alt="Stars" />
          <img src={stroke} className="CourseInfo-Stroke" alt="Stroke" />
          <p className="CourseDetails-Black">89</p>
          <p className="CourseDetails-Grey">Ratings</p>
          <img src={stroke} className="CourseInfo-Stroke" alt="Stroke" />{" "}
          <p className="CourseDetails-Black">233</p>
          <p className="CourseDetails-Grey">Enrolled</p>
        </div>
        <div className="CourseInfo-Buttons">
          <HashLink to="/student/#enrolled-courses">
            <button className="AddToCart">Add to Cart</button>
            <button className="BuyNow">Buy Now</button>
          </HashLink>
        </div>
        <p className="LearnTitle">WHAT YOU’LL LEARN</p>
        <div className="custom-list-subject">
          <ul className="custom-list">
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">
                10 years experience in teaching
              </span>
            </li>
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">
                Cikgu Cemerlang in SMK Cemerlang
              </span>
            </li>
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">Degree in USM</span>
            </li>
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">
                Based in Kuala Lumpur, Malaysia
              </span>
            </li>
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">Caring and loving</span>
            </li>
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">Patient</span>
            </li>
            <li>
              <img src={Tick} className="Tick" />{" "}
              <span className="ListItemText-subject">
                Engaging and interactive lesson
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SubjectInfoBox() {
  // Define your icon variables
  const clockIcon = "icon-clock.png";
  const checkIcon = "icon-check.png";
  const bookIcon = "icon-book.png";
  const downloadIcon = "icon-download.png";
  const mobileIcon = "icon-mobile.png";
  const globeIcon = "icon-globe.png";
  const certificateIcon = "icon-certificate.png";

  return (
    <div className="SubjectInfoBox">
      <p className="SubjectInfoBox-Title">This course includes</p>
      <div className="SubjectInforBox-text">
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">62 hours on-demand video</p>
        </div>
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">100 exercises</p>
        </div>
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">29 sets of past year paper</p>
        </div>
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">118 downloadable resources</p>
        </div>
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">Access on mobile and TV</p>
        </div>
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">Full lifetime access</p>
        </div>
        <div className="SubjectInfoItem">
          <img src={Tick} alt="Clock Icon" />
          <p className="ListItemText-subject">Certificate of completion</p>
        </div>
      </div>
    </div>
  );
}

function CommentSectionBox() {
  return (
    <div className="CommentSectionBox">
      <p className="Comment-Title">See what our students said . . .</p>
      <div className="ScrollableComment"></div>
      <div className="CommentBox">
        <div className="Comment-user-image">
          <img
            src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
            alt="User Image"
            className="round-image"
          />
        </div>

        <div className="comment-user-reflection">
          <img src={stars} className="comment-Stars" alt="Stars" />
          <p className="comment-user-name">John Doe</p>
          <p className="comment-user-comment">
            The lesson is great! Very helpful!
          </p>
        </div>

        <div className="comment-user-date">
          <p>7-11-2023</p>
        </div>
      </div>

      <div className="CommentBox">
        <div className="Comment-user-image">
          <img
            src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
            alt="User Image"
            className="round-image"
          />
        </div>

        <div className="comment-user-reflection">
          <img src={stars} className="comment-Stars" alt="Stars" />
          <p className="comment-user-name">John Doe</p>
          <p className="comment-user-comment">
            The lesson is great! Very helpful!
          </p>
        </div>

        <div className="comment-user-date">
          <p>7-11-2023</p>
        </div>
      </div>

      <div className="CommentBox">
        <div className="Comment-user-image">
          <img
            src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
            alt="User Image"
            className="round-image"
          />
        </div>

        <div className="comment-user-reflection">
          <img src={stars} className="comment-Stars" alt="Stars" />
          <p className="comment-user-name">John Doe</p>
          <p className="comment-user-comment">
            The lesson is great! Very helpful!
          </p>
        </div>

        <div className="comment-user-date">
          <p>7-11-2023</p>
        </div>
      </div>

      <div className="CommentBox">
        <div className="Comment-user-image">
          <img
            src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
            alt="User Image"
            className="round-image"
          />
        </div>

        <div className="comment-user-reflection">
          <img src={stars} className="comment-Stars" alt="Stars" />
          <p className="comment-user-name">John Doe</p>
          <p className="comment-user-comment">
            The lesson is great! Very helpful!
          </p>
        </div>

        <div className="comment-user-date">
          <p>7-11-2023</p>
        </div>
      </div>
    </div>
  );
}

function CourseDescriptionContent() {
  return (
    <div className="CourseDescriptionPageAllBox">
      <div className="FirstTwoInfoBox">
        <div>
          <TeacherInfoBox />
          <SubjectInfoBox />
        </div>

        <CourseInfoBox />
      </div>

      <CommentSectionBox />
    </div>
  );
}

export default A03;
