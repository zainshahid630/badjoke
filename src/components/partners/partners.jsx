import "./partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Partners = () => {
  return (
    <div className="partners">
      <div className="box">
        <div className="wrapper full">
          <h2 className="partners-head">ROADMAP</h2>
          <div className="swipper-wrapper">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              pagination={{ clickable: true }} // Make pagination dots clickable
              slidesPerView={1}
              breakpoints={{
                769: {
                  slidesPerView: 3, // 3 slides per view on larger screens
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="card">
                  <h5>Phase 1</h5>
                  <p>
                    Initiate the Doge2014 project with a token presale to
                    celebrate Dogecoin and build a strong community foundation.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <h5>Phase 2</h5>
                  <p>
                    Expand community outreach and integrate new functionalities
                    to enhance user engagement.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <h5>Phase 3</h5>
                  <p>
                    Launch strategic partnerships and develop innovative
                    features to drive growth.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <h5>Phase 4</h5>
                  <p>
                    Achieve mainstream adoption and continuous community support
                    for sustained success.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
