import "../../index.css";
import "./C02.css";
import logo from "../SkorMantap-Logo.png";
import man from "../C01/mr bean photo.jpg";
import "../iconfont/iconfont.css";
import { Link } from "react-router-dom";

export const C02 = () => {
  return (
    <div className="C02">
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
                  <img src={logo} alt="User Profile" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="childList wrapper">
          <ul>
            <li>
              <a href="#">CHILDREN 1</a>
            </li>
            <li>
              <a href="#">CHILDREN 2</a>
            </li>
            <li>
              <Link to="/parent/add_child">+</Link>
            </li>
          </ul>
        </div>

        <div className="children">
          <h4>Children 1</h4>
          <div className="frame">
            <div className="left">
              <img src={man} alt="Photo of child" />
            </div>

            <div className="right">
              <span className="name">Mr. Adam</span>
              <div className="date">
                <span className="iconfont">&#xe644;</span>
                <span className="title">14 July 2023</span>
              </div>
              <div className="level">
                <span className="iconfont">&#xe644;</span>
                <span className="title"> Form 5</span>
              </div>

              <div className="mode">
                <span className="title">
                  <a href="#">
                    <span>{`—`}</span>
                  </a>
                  <p>Online Courses</p>
                  <span className="more-child">
                    <a href="#">{`More >`}</a>
                  </span>
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

              <div className="mode">
                <span className="title">
                  <a href="#">
                    <span>{`—`}</span>
                  </a>
                  <p>Self-paced Learning</p>
                  <span className="more-child">
                    <a href="#">{`More >`}</a>
                  </span>
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
        </div>

        <div className="children" style={{ marginBottom: "200px" }}>
          <h4>Children 1</h4>
          <div className="frame">
            <div className="left">
              <img src={man} alt="Photo of child" />
            </div>

            <div className="right">
              <span className="name">Mr. Adam</span>
              <div className="date">
                <span className="iconfont">&#xe644;</span>
                <span className="title">14 July 2023</span>
              </div>
              <div className="level">
                <span className="iconfont">&#xe644;</span>
                <span className="title"> Form 5</span>
              </div>

              <div className="mode">
                <span className="title">
                  <a href="#">
                    <span>{`—`}</span>
                  </a>
                  <p>Online Courses</p>
                  <span className="more-child">
                    <a href="#">{`More >`}</a>
                  </span>
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

              <div className="mode">
                <span className="title">
                  <a href="#">
                    <span>{`—`}</span>
                  </a>
                  <p>Self-paced Learning</p>
                  <span className="more-child">
                    <a href="#">{`More >`}</a>
                  </span>
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
        </div>

        <div className="footer"></div>
      </section>
    </div>
  );
};

export default C02;
