import React from "react";
import { TutorNavbar } from "../../components/Navbar/Navbar";
import clockIcon from "./clock.svg";
import subjectIcon from "./subject.svg";
import syllabusIcon from "./syllabus.svg";
import "./TutorCourseOverview.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

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
      <Footer />
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
      "This is the place where the course description will be placed. Students can read the description of the course here.",
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
      <div className="Course-Class">
        <div>
          <img src={img} alt={subject} className="Course-Class-Image" />
        </div>
        <div className="Course-description">
          <div>
            <p className="Course-Class-Subject">{subject}</p>
            <p className="Course-Class-Teacher">{teacherName}</p>
          </div>

          <div className="dotted-line"> </div>

          <div className="Course-Class-Components">
            <div className="Course-Class-Components-Icon">
              <img
                src={clockIcon}
                className="FilterComponent"
                alt="Clock Logo"
              />
              <p className="Course-Class-text"> {duration}</p>
            </div>

            <div className="Course-Class-Components-Icon">
              <img
                src={syllabusIcon}
                className="FilterComponent"
                alt="Book Logo"
              />
              <p className="Course-Class-text">{courses}</p>
            </div>

            <div className="Course-Class-Components-Icon">
              <img
                src={subjectIcon}
                className="FilterComponent"
                alt="Share Logo"
              />
              <p className="Course-Class-text">{enrolled}</p>
            </div>
          </div>
        </div>
        <div className="Course-Class-Edit">
          <Link to="/tutor/course_dashboard">
            <button className="Course-Class-Edit-Button">Edit</button>
          </Link>
        </div>
        <div className="Course-Class-Description">{description}</div>
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
