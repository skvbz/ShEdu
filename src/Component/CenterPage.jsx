import heroimg from '../images/Humaaans Spacehero-sect.png'

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
                <p>Every large design company whether it’s a multi-national branding corporation or a regular down at heel tatty magazine publisher needs to fill holes in the workforce.</p>
                <p className='hsbutton'>Get started</p>
              </div>
              <div className="hsimage-cont">
                <img src={heroimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterPage;
