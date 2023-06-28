import logo from "../images/Group1.png";
import { HiViewGrid } from "react-icons/hi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { LiaPhoneSolid } from "react-icons/lia";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

function LeftPanel() {
  return (
    <div className="left-p1">
      <div className="left-p2">
        <div className="left-p3">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="dashboard">
            <div className="dashboard-list">
              <div className="menu">
                <HiViewGrid className="dash-icon" />
                <h4>Dashboard</h4>
              </div>
              <div className="menu">
                <HiOutlineChartSquareBar className="dash-icon" />
                <h4>Grades</h4>
              </div>
              <div className="menu">
                <HiOutlineUserGroup className="dash-icon" />
                <h4>Class</h4>
              </div>
              <div className="menu">
                <FiUsers className="dash-icon" />
                <h4>Groups</h4>
              </div>
              <div className="menu">
                <LuClipboardList className="dash-icon" />
                <h4>Administration</h4>
              </div>
              <div className="menu">
                <HiOutlineOfficeBuilding className="dash-icon" />
                <h4>Departments</h4>
              </div>
            </div>
          </div>
          <div className="team">
            <h5>TEAMS</h5>
            <div className="dashboard-list">
              <div className="menu">
                <BsChatDots className="contact-icon" />
                <h4>Message</h4>
              </div>
              <div className="menu">
                <LiaPhoneSolid className="contact-icon" />
                <h4>Call Meeting</h4>
              </div>
            </div>
          </div>
          <div className="upgrade">
            <div className="upgrade-cont">
                <HiOutlineArrowNarrowUp className="upgrade-icon"/>
                <h5 className="upgrade-text">Upgrade to Pro for more feature</h5>
                <h5 className="upgrade-button">Upgrade</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
