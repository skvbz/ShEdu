import heroimg from "../images/Humaaans Spacehero-sect.png";
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
                <p className="hsbutton">Get started</p>
              </div>
              <div className="hsimage-cont">
                <img src={heroimg} alt="" />
              </div>
            </div>
            {/* graph div */}
            <div className="doc-prog">
              <div className="doc">
                <div className="doc-text">
                  <h4>Your documents</h4>
                </div>
                <div className="doc-tab">
                  <div className="doc-info">
                    <LuClipboardList className="doc-icon"/>
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
                    <LuClipboardList className="doc-icon"/>
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
                    <BsThreeDots className="dot"/>
                  </div>
                  <div className="prog-tab">
                    <div className="tab-icon">UI</div>
                    <div className="prog-info">
                      <h5>Part Typography</h5>
                      <div>
                        <p className="prog-course">User Interface</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="prog-tab">
                    <div className="tab-icon">UI</div>
                    <div className="prog-info">
                      <h5>Part Typography</h5>
                      <div>
                        <p className="prog-course">User Interface</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="prog-tab">
                    <div className="tab-icon">UI</div>
                    <div className="prog-info">
                      <h5>Part Typography</h5>
                      <div>
                        <p className="prog-course">User Interface</p>
                        <p></p>
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
