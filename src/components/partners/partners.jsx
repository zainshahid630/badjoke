import "./partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <div className="box">
        <div className="wrapper full">
          <h2 className="partners-head">ROADMAP</h2>
          <div className="swiper-wrapper">
            <div className="row">
              <div className="Card-containor ">
                <div className="road-card">
                  <div className="numimage">1</div>
                  <div className="content">
                    <h5>Phase 1</h5>
                    <p>
                      Initiate the Doge2014 project with a token presale to
                      celebrate Dogecoin and build a strong community foundation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Card-containor ">
                <div className="road-card">
                  <div className="numimage">2</div>
                  <div className="content">
                    <h5>Phase 2</h5>
                    <p>
                      Expand community outreach and integrate new functionalities
                      to enhance user engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Card-containor ">
                <div className="road-card">
                  <div className="numimage">3</div>
                  <div className="content">
                    <h5>Phase 3</h5>
                    <p>
                      Launch strategic partnerships and develop innovative
                      features to drive growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Card-containor ">
                <div className="road-card">
                  <div className="numimage">4</div>
                  <div className="content">
                    <h5>Phase 4</h5>
                    <p>
                      Achieve mainstream adoption and continuous community support
                      for sustained success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
