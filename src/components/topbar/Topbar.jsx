import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://sdc-blog.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        {/* <Link className="link" to="/">
          <i className="fa fa-linkedin-square"></i>
        </Link> */}
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <a className="link" href="https://iitmjanakpuri-sdc.in/">
              ABOUT
            </a>
          </li>
          <li className="topListItem">
            <a className="link" href="https://iitmjanakpuri-sdc.in#contact">
              CONTACT
            </a>
          </li>
          <li className="topListItem">
            {user ? (
              <Link className="link" to="/write">
                WRITE
              </Link>
            ) : null}
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link to="/settings">
              <img
                className="topImg"
                src={PF + user.profilePic}
                alt="profileimg"
              />
            </Link>
            {/* ForUsername Display */}
            {/* <h5 style={{color:'white'}}></h5> */}
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            {/* <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li> */}
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
