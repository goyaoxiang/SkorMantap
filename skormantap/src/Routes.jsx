import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const D01Homepage = React.lazy(() => import("pages/D01Homepage"));
const D02RoleSelectionPageRegistration = React.lazy(() =>
  import("pages/D02RoleSelectionPageRegistration")
);
const D03LoginPage = React.lazy(() => import("pages/D03LoginPage"));

const A01StudentDashboard = React.lazy(() => import("Student/A01/A01"));
const A02CourseSelection = React.lazy(() =>
  import("Student/A02/CoursesSelection")
);
const A03CourseDescription = React.lazy(() =>
  import("Student/A03/CourseDescriptionPage")
);
const A04CourseDashboard = React.lazy(() =>
  import("Student/A04/StudentDashboard")
);

const B01TutorDashboard = React.lazy(() =>
  import("Tutor/Dashboard/TutorDashboard")
);
const B02TutorCourseOverview = React.lazy(() =>
  import("Tutor/CourseOverview/TutorCourseOverview")
);
const B03TutorCourseDashboard = React.lazy(() =>
  import("Tutor/CourseEdit/TutorCourseEdit")
);

const C01ParentDashboard = React.lazy(() => import("Parent/C01/C01"));
const C02ParentChildrenList = React.lazy(() => import("Parent/C02/C02"));
const C03ParentAddChild = React.lazy(() => import("Parent/C03/C03"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<D01Homepage />} />
          <Route
            path="/registration_selection"
            element={<D02RoleSelectionPageRegistration />}
          />
          <Route path="/student_login" element={<D03LoginPage />} />
          <Route path="/parent_login" element={<D03LoginPage />} />
          <Route path="/tutor_login" element={<D03LoginPage />} />
          <Route path="/student" element={<A01StudentDashboard />} />
          <Route path="/student/courses" element={<A02CourseSelection />} />
          <Route
            path="/student/course_description"
            element={<A03CourseDescription />}
          />
          <Route
            path="/student/course_dashboard"
            element={<A04CourseDashboard />}
          />
          <Route path="/tutor" element={<B01TutorDashboard />} />
          <Route
            path="/tutor/course_overview"
            element={<B02TutorCourseOverview />}
          />
          <Route
            path="/tutor/course_dashboard"
            element={<B03TutorCourseDashboard />}
          />
          <Route path="/parent" element={<C01ParentDashboard />} />
          <Route
            path="/parent/children_list"
            element={<C02ParentChildrenList />}
          />
          <Route path="/parent/add_child" element={<C03ParentAddChild />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
