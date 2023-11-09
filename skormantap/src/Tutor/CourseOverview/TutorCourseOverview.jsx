import React from "react";
import TutorNavbar from "../Navbar/Navbar";
import clockIcon from "./clock.svg";
import "./TutorCourseOverview.css";
import { Link } from "react-router-dom";

const TutorCourseOverview = () => {
  return (
    <div className="tutor-course-overview">
      <TutorNavbar />
      <div className="index">
        <button className="add-course-button">Add Course</button>

        <div className="course">
          <CourseSection />
        </div>

        <div className="course">
          <CourseSection />
        </div>
        <div className="course">
          <CourseSection />
        </div>
        <div className="course">
          <CourseSection />
        </div>
      </div>
    </div>
  );
};

const Courses = [
  {
    img: "https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png",
    subject: "FORM 1 Mathematics",
    teacherName: "Tracy D. Wright",
    duration: "22 hr 30 min",
    courses: "12 Courses",
    enrolled: "223 Enrolled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const CoursesComponent = (props) => {
  const {
    img,
    subject,
    teacherName,
    duration,
    courses,
    enrolled,
    description,
  } = props;
  return (
    <>
      <div className="CourseClass">
        <div>
          <img src={img} alt={subject} className="CourseClass-Image" />
        </div>
        <div className="Course-description">
          <div>
            <p className="CourseClass-Subject">{subject}</p>
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
              <p className="CourseClass-text"> {duration}</p>
            </div>

            <div className="CourseClass-Components-Clock">
              <img
                src={clockIcon}
                className="FilterComponent-SVG"
                alt="Clock Logo"
              />
              <p className="CourseClass-text">{courses}</p>
            </div>

            <div className="CourseClass-Components-Clock">
              <img
                src={clockIcon}
                className="FilterComponent-SVG"
                alt="Clock Logo"
              />
              <p className="CourseClass-text">{enrolled}</p>
            </div>
          </div>
        </div>
        <div className="CourseClass-Edit">
          <Link to="/tutor/course_dashboard">
            <button className="CourseClass-Edit-Button">Edit</button>
          </Link>
        </div>
        <div className="CourseClass-Description">{description}</div>
      </div>
    </>
  );
};

const CourseSection = () => {
  return Courses.map((course) => {
    const {
      img,
      subject,
      teacherName,
      duration,
      courses,
      enrolled,
      description,
    } = course;
    return <CoursesComponent {...course} key={course.id}></CoursesComponent>;
  });
};

export default TutorCourseOverview;
