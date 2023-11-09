import React from "react";
import "./CoursesSelection.css";
import Navbar from "../Components/Navbar";
import clockIcon from "./clock.svg";
import stars from "./5-stars.png";
import modeIcon from "./mode.svg";
import syllabusIcon from "./syllabus.svg";
import subjectIcon from "./subject.svg";
import ratingIcon from "./rating.svg";
import { Link } from "react-router-dom";

const Courses = [
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
  {
    img: "https://media.licdn.com/dms/image/D5612AQEU7JqyJRTWBg/article-cover_image-shrink_423_752/0/1690525652321?e=1704931200&v=beta&t=ZLlZCIqjbeAfMiY7Vg42l1UvX2uoL9toLjeOd7uR3pw",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: " 223 Enrolled",
  },
];

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  // Add more book objects here
];

function A02() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <FilterComponent />

      <section className="subject-class">
        <div className="CourseClassContainer">
          {Courses.map((course) => {
            course;
            return (
              <>
                <CoursesComponent
                  {...course}
                  key={course.id}
                ></CoursesComponent>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

function SearchBar() {
  return (
    <div className="middle-section">
      <div className="input-box">
        <i className="uil uil-search"></i>
        <input type="text" placeholder="Search here..." />
        <button className="button">Search</button>
      </div>
    </div>
  );
}

function FilterComponent() {
  return (
    <div className="Filter-Component">
      <div className="FilterComponent-box">
        <img src={clockIcon} className="FilterComponent-SVG" alt="Clock Logo" />
        <p>Posted at</p>
        <div className="Filter-Triangle"></div>
      </div>

      <div className="FilterComponent-box">
        <img src={modeIcon} className="FilterComponent-SVG" alt="Clock Logo" />
        <p>Mode</p>
        <div className="Filter-Triangle"></div>
      </div>

      <div className="FilterComponent-box">
        <img
          src={syllabusIcon}
          className="FilterComponent-SVG"
          alt="Clock Logo"
        />
        <p>Syllabus</p>
        <div className="Filter-Triangle"></div>
      </div>

      <div className="FilterComponent-box">
        <img
          src={subjectIcon}
          className="FilterComponent-SVG"
          alt="Clock Logo"
        />
        <p>Subject</p>
        <div className="Filter-Triangle"></div>
      </div>

      <div className="FilterComponent-box">
        <img
          src={ratingIcon}
          className="FilterComponent-SVG"
          alt="Clock Logo"
        />
        <p>Rating</p>
        <div className="Filter-Triangle"></div>
      </div>
    </div>
  );
}

function CoursesComponent(props) {
  const { img, subject, teacherName, duration, courses, enrolled } = props;
  return (
    <>
      <div className="CourseClass">
        <div>
          <img src={img} alt={subject} className="CourseClass-Image" />
        </div>

        <div className="CourseClass-FirstRow">
          <p className="CourseClass-Subject">{subject}</p>
          <img src={stars} alt="5 stars" className="CourseClass-Stars" />
        </div>

        <div>
          <p className="CourseClass-Teacher">{teacherName}</p>
        </div>

        <div className="dotted-line"> </div>

        <div className="CourseClass-Components">
          <div className="CourseClass-Components-Clock">
            <img
              src={clockIcon}
              className="FilterComponent-SVG"
              alt="Clock Logo"
            />
            <p className="CourseClass-Duration"> {duration}</p>
          </div>

          <div className="CourseClass-Components-Clock">
            <img
              src={clockIcon}
              className="FilterComponent-SVG"
              alt="Clock Logo"
            />
            <p className="CourseClass-Courses">{courses}</p>
          </div>

          <div className="CourseClass-Components-Clock">
            <img
              src={clockIcon}
              className="FilterComponent-SVG"
              alt="Clock Logo"
            />
            <p className="CourseClass-Enrolled">{enrolled}</p>
          </div>
        </div>
        <Link to="/student/course_description">
          <button className="CourseClass-Button">Join Now</button>
        </Link>
      </div>
    </>
  );
}

function JoinNowButton() {
  return <button className="CourseClass-Button">Enroll</button>;
}

export default A02;
