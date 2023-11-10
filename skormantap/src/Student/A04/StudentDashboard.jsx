import React from "react";
import "./StudentDashboard.css";
import { StudentNavbar } from "../../components/Navbar/Navbar";
import stars from "./5-stars.png";
import stroke from "./stroke.png";
import { useState } from "react";
import clock from "./clock.svg";
import Footer from "../../components/Footer/Footer";
import subjectIcon from "../A02/subject.svg";
import syllabusIcon from "../A02/syllabus.svg";
import modeIcon from "../A02/mode.svg";

function A04() {
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
    <div className="TeacherInfoBox">
      <img
        src="https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png"
        alt="Teacher"
        className="TeacherImage"
      />
      <p className="TeacherName">Cynthia A. Nelson</p>
      <p className="TeacherPosition">Professor @George Brown College</p>
      <p className="TeacherDescription">A very experienced teacher.</p>
      <p className="MoreAboutTeacher">More about the teacher</p>
    </div>
  );
}

function CourseInfoBox() {
  return (
    <div>
      <div className="CourseInfoBox">
        <h1 className="CourseInfo-Title">FORM 1 MATHEMATICS</h1>

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
        <div className="CourseInfo-Description-Box">
          <p className="CourseInfo-Description">
            This is the place where the course description will be placed.
            Students can read the description of the course here.
          </p>
          <p className="CourseInfo-seereview">see more reviews</p>

          <button className="CourseInfo-button">More Info</button>
        </div>
      </div>
    </div>
  );
}

function CourseContentSectionBox() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [embedUrl, setEmbedUrl] = useState(
    "https://docs.google.com/document/d/1mjwP21tWlfwktJ1v6hSVjPMWfBpGlmc5DSHFeqZ3R4U/edit?usp=sharing"
  );

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const courseContent = Array.from({ length: 15 }, (_, i) => ({
    title: `Lesson ${i + 1}`,
    items: [
      {
        text: "Chapter Description",
        icon: stars,
        link: "https://docs.google.com/document/d/1mjwP21tWlfwktJ1v6hSVjPMWfBpGlmc5DSHFeqZ3R4U/edit?usp=sharing",
      },
      {
        text: "Chapter Notes",
        icon: subjectIcon,
        link: "https://fliphtml5.com/zschb/ispf/basic",
      },
      {
        text: "Chapter Videos",
        icon: modeIcon,
        link: "https://www.pexels.com/video/an-open-book-2268807/",
      },
      {
        text: "Chapter Exercise",
        icon: syllabusIcon,
        link: "https://trial.spmpaper.me/2020/Matematik%20(Math)/Penang/2020%20Penang%20Matematik%20K1.pdf",
      },
    ],
  }));

  return (
    <div>
      <h1>Course Content</h1>
      <div className="Biggest-box">
        <div className="CourseContent-Box">
          {courseContent.map((section, index) => (
            <div key={index} className="Accordion-Section">
              <button
                className={`Accordion-Button ${
                  activeAccordion === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="button-content">
                  <div className="title">{section.title}</div>
                  <div
                    className={`dropdown-symbol ${
                      activeAccordion === index ? "rotate" : ""
                    }`}
                  >
                    ▼
                  </div>
                </div>
                {activeAccordion === index && (
                  <div className="Accordion-Content">
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          onClick={() => setEmbedUrl(item.link)}
                        >
                          <img src={item.icon} alt={item.text} />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
        <EmbedNotes url={embedUrl} />
      </div>
    </div>
  );
}

function EmbedNotes({ url }) {
  return (
    <div className="EmbedNotes">
      <iframe src={url} className="embedsize"></iframe>
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
            The course is very good. I like it very much. I will recommend it.
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
            The course is very good. I like it very much. I will recommend it.
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
            The course is very good. I like it very much. I will recommend it.
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
            The course is very good. I like it very much. I will recommend it.
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
        </div>
        <CourseInfoBox />
      </div>

      <div className="Lesson-TwoBox">
        <CourseContentSectionBox />
      </div>
      <CommentSectionBox />
    </div>
  );
}

export default A04;
