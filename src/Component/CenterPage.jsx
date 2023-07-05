import heroimg from "../images/Humaaans Spacehero-sect.png";
import graph from "../images/GraphGraph.png";
import { LuClipboardList } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";

function CenterPage() {
  return (
    <>
      <div className="centerp1">
        <div className="centerp2">
          <div className="centerp3">
            <div className="welcome-textbox">
              <h4>Hello Ghazi, Welcome back 👋🏻</h4>
              <h1>Your Dashboard Today</h1>
            </div>
            <div className="hero-sect">
              <div className="hstext-cont">
                <h4>Creative outdoor ads</h4>
                <p>
                  Every large design company whether it’s a multi-national
                  branding corporation or a regular down at heel tatty magazine
                  publisher needs to fill holes in the workforce.
                </p>
                <button className="hsbutton">Get started</button>
              </div>
              <div className="hsimage-cont">
                <img src={heroimg} alt="" />
              </div>
            </div>
            <div className="bar-chart">
              <img src={graph} alt="" />
            </div>
            <div className="doc-prog">
              <div className="doc">
                <div className="doc-text">
                  <h4>Your documents</h4>
                </div>
                <div className="doc-tab">
                  <div className="doc-info">
                    <LuClipboardList className="doc-icon" />
                    <div className="doc-record">
                      <h5>Submisson NLP Programming</h5>
                      <p>04 Jan, 09:20AM</p>
                    </div>
                  </div>
                  <div className="doc-status">
                    <p>Submitted</p>
                  </div>
                </div>
                <div className="doc-tab">
                  <div className="doc-info">
                    <LuClipboardList className="doc-icon" />
                    <div className="doc-record">
                      <h5>Submisson NLP Programming</h5>
                      <p>04 Jan, 09:20AM</p>
                    </div>
                  </div>
                  <div className="doc-status">
                    <p>Submitted</p>
                  </div>
                </div>
              </div>
              <div className="prog">
                <div className="prog-text">
                  <h4>Progress Learning</h4>
                </div>
                <div className="prog-box">
                  <div className="prog-icon">
                    <BsThreeDots className="dot" />
                  </div>
                  <div className="prog-tab">
                    <div className="tab-icon">UI</div>
                    <div className="prog-info">
                      <h5>Part Typography</h5>
                      <div className="twin-bar">
                        <p className="prog-course">User Interface</p>
                        <div className="progress-bar">
                          <div className="progress-bar-fill"></div>
                          <div className="progress-bar-remaining"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prog-tab">
                    <div className="tab-icon">DS</div>
                    <div className="prog-info">
                      <h5>Part Data Structure</h5>
                      <div className="twin-bar">
                        <p className="prog-course">Computer Science</p>
                        <div className="progress-bar">
                          <div className="progress-bar-fill2"></div>
                          <div className="progress-bar-remaining2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prog-tab">
                    <div className="tab-icon">AS</div>
                    <div className="prog-info">
                      <h5>Part Architecture</h5>
                      <div className="twin-bar">
                        <p className="prog-course">Engineering</p>
                        <div className="progress-bar">
                          <div className="progress-bar-fill3"></div>
                          <div className="progress-bar-remaining3"></div>
                        </div>
                      </div>
                    </div>
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

export default CenterPage;
