import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage</h1>
      <p className="headline">
      </p>
      <ul>
        <li>
          <Link to="/d01homepage">D01 Homepage</Link>
        </li>
        <li>
          <Link to="/d02roleselectionpageregistration">
            D02 Role Selection Page - Registration
          </Link>
        </li>
        <li>
          <Link to="/d03loginpage">D03 Login Page</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
