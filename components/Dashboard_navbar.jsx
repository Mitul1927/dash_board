import React from "react";
import { NavLink } from "react-router-dom";
import "../static/Dashboard_navbar.css";
import Logo from "../public/logo.png";
import Dashboard from "../public/dashboard.png";
import Mycourses from "../public/mycourses.png";
import Students from "../public/students.png";
import Schedule from "../public/Schedule.png";
import Liveclass from "../public/liveclass.png";
import Chat from "../public/chat.png";
import Myaccount from "../public/myaccount.png";
import Notify from "../public/notify.png";
import Logout from "../public/logout.png";
import Notify2 from "../public/notify2.png";
import Dashboard2 from "../public/Dashboard2.png";
import Mycourses2 from "../public/mycourses2.png";
import Students2 from "../public/students2.png";
import Schedule2 from "../public/schedule2.png";
import Liveclass2 from "../public/liveclass2.png";
import Chat2 from "../public/chat2.png";
function Dashboard_navbar() {
  return (
    <div className="dashboard-navbar2">
      <div className="dashboard-navbar-logo">
        <img src={Logo} alt="logo" />
        <h1>LearnLynx</h1>
      </div>
      <div className="dashboard-navbar-links">
        <NavLink
          to="Dashboard"
          className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }
        >
          {({ isActive }) => (
            <p className="dashboard-navbar-link">
              <img
                src={isActive ? Dashboard2 : Dashboard}
                alt="dashboard"
                className="dashboard"
              />
              Dashboard
            </p>
          )}
        </NavLink>
        <NavLink
          to="/mycourses"
          className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }
        >
          {({isActive})=>(
          <p className="dashboard-navbar-link">
            <img src={isActive ? Mycourses2 : Mycourses} alt="my courses" />
            My Courses
          </p>)}
        </NavLink>
        <NavLink to="/students" className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }>
            {({isActive})=>(
          <p className="dashboard-navbar-link">
            <img src={isActive ? Students2 :Students} alt="students" />
            Students
          </p>)}
        </NavLink>
        <NavLink to="/schedule" className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }>
          {({isActive})=> (
          <p className="dashboard-navbar-link">
            <img src={isActive ? Schedule2 :Schedule} alt="schedule" />
            Schedule
          </p>)}
        </NavLink>
        <NavLink to="/liveclass" className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }>
            {({isActive})=>(
          <p className="dashboard-navbar-link">
            <img src={isActive? Liveclass2 :Liveclass} alt="" />
            Live Class
          </p>)}
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }>
            {({isActive})=>(
          <p className="dashboard-navbar-link">
            <img src={isActive?Chat2 : Chat} alt="chat" />
            Chat
          </p>)}
        </NavLink>
        <NavLink to="/myaccount" className="dashboard-navbar-navlink">
          <p className="dashboard-navbar-link">
            <img src={Myaccount} alt="myaccount" />
            My Account
          </p>
        </NavLink>
        <NavLink
          to="/notify"
          className={({ isActive }) =>
            isActive
              ? "dashboard-navbar-navlink active"
              : "dashboard-navbar-navlink"
          }
        >
          {({ isActive }) => (
            <p className="dashboard-navbar-link">
              <img src={isActive ? Notify2 : Notify} alt="notify" />
            </p>
          )}
        </NavLink>
      </div>
      <div className="spacer"></div>
      <div>
        <button className="navbar-button">
          <img src={Logout} alt="logout" /> <p>Log Out</p>{" "}
        </button>
      </div>
    </div>
  );
}

export default Dashboard_navbar;
