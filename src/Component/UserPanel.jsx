import { AiOutlineBell } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { HiOutlineCog } from "react-icons/hi";
import { HiOutlineSortAscending } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

function UserPanel() {
  return (
    <>
      <div className="userp1">
        <div className="userp2">
          <div className="userp3">
            <div className="counter">
              <div className="bell">
                <AiOutlineBell className="counter-icon" />
              </div>
              <HiOutlineCog className="counter-settingicon" />
              <div className="user-pic">
                <AiOutlineUser className="counter-icon" />
              </div>
            </div>
            <div className="counter-sect">
              <div className="upcoming">
                <div className="upcoming-text">
                  <h4>Upcoming</h4>
                  <BsThreeDots className="counter-icon" />
                </div>
                <div className="upcoming-info">
                  <div className="upcoming-bell">
                    <AiOutlineBell className="ubell-icon" />
                  </div>
                  <div className="upcoming-record">
                    <h5>Meeting with Mr Lurah</h5>
                    <div className="upcoming-time">
                      <p>
                        09:20AM <span className="due">Due Soon</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="upcoming-info">
                  <div className="upcoming-bell">
                    <AiOutlineBell className="ubell-icon" />
                  </div>
                  <div className="upcoming-record">
                    <h5>Meeting with Tok Dalang</h5>
                    <div className="upcoming-time">
                      <p>
                        07:00AM <span className="due">Due Soon</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent">
                <div className="recent-text">
                  <h4>Recent Activity</h4>
                  <BsThreeDots className="recent-icon" />
                </div>
                <div className="recent-info">
                    <LuClipboardList className="rdoc-icon" />
                    <div className="recent-record">
                      <h5>Submisson NLP Programming</h5>
                      <p>04 Jan, 09:20AM</p>
                    </div>
                </div>
                <div className="recent-info">
                    <HiOutlineSortAscending className="out-icon" />
                    <div className="recent-record">
                      <h5>Outcome administration</h5>
                      <p>04 Jan, 09:20AM</p>
                    </div>
                </div>
                <div className="recent-info">
                    <BiMicrophone className="mic-icon" />
                    <div className="recent-record">
                      <h5>Teacher Panel Discussion</h5>
                      <p>10 Jan, 11:00AM</p>
                    </div>
                </div>
                <div className="recent-info">
                    <LuClipboardList className="rdoc-icon" />
                    <div className="recent-record">
                      <h5>Submisson NLP Programming</h5>
                      <p>04 Jan, 09:20AM</p>
                    </div>
                </div>
                <div className="recent-info">
                    <LuClipboardList className="rdoc-icon" />
                    <div className="recent-record">
                      <h5>Submisson NLP Programming</h5>
                      <p>04 Jan, 09:20AM</p>
                    </div>
                </div>
              </div>
              <div className="latest">
                <div className="latest-text">
                    <h4>Latest Message</h4>
                </div>
                <div className="users-txtmsg">
                    <div className="usertxt-icon">
                        <h4>AK</h4>
                    </div>
                    <div className="usertxt-icon">
                        <h4>BK</h4>
                    </div>
                    <div className="usertxt-icon">
                        <h4>CK</h4>
                    </div>
                    <div className="usertxt-icon">
                        <h4>DK</h4>
                    </div>
                    <div className="usertxt-icon">
                        <h4>FK</h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPanel;
