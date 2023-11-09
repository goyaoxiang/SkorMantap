import React from 'react';
import "./Navbar.css";
import SkorMantapLogo from "./SkorMantap-Logo.png";


function Navbar() {
  return(
    <section>
      <div className="navbar">
        <div className="navleft">
          <ul>
            <li>
              <a href="#">
              {/* <img src={SkorMantapLogo} alt="SkorMantap" /> */}
              </a>
            </li>
            <li>
              <a href="#">Children</a>
            </li>
            <li>
              <a href="#">Courses</a>
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
                <img src="#" alt="User Profile" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar;



