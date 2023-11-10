import "../../index.css";
import "./C03.css";
import "../../components/iconfont/iconfont.css";
import { ParentNavbar } from "../../components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

export const C03 = () => {
  return (
    <div className="C03">
      <section>
        <ParentNavbar />

        <div className="childList wrapper">
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
        </div>

        <div className="frame wrapper">
          <h4 className="title">Add a New Child</h4>
          <span className="desc">
            Please enter the personal details of your child.
          </span>

          <form action="">
            <input type="text" name="" id="" placeholder="Name" />
            <br />
            <input type="text" name="" id="" placeholder="Age" />
            <br />
            <input type="text" name="" id="" placeholder="Year of Study" />
            <br />
            <input type="text" name="" id="" placeholder="Mobile Number" />
            <br />
            <input type="text" name="" id="" placeholder="Email Address" />
            <br />
            <hr style={{ marginTop: "40px", width: "800px" }} />
            <input type="submit" value={`Register`} />
          </form>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default C03;
