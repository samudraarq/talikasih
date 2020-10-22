import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade, Autoplay, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import styles from "./Carousel.module.css";
import imgSlide1 from "../../assets/homepage/Home/Carousel/slide1.svg";
import ellipse from "../../assets/homepage/Home/Carousel/Ellipse.svg";
import imgSlide2 from "../../assets/homepage/Home/Carousel/slide2.svg";

SwiperCore.use([Pagination, EffectFade, Autoplay, A11y]);

function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        effect="fade"
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: styles.paginationBullet,
          bulletActiveClass: styles.paginationBulletActive,
          // renderBullet: (index, className) => {
          //     console.log(index, className);
          //     return '<span class="' + className + '">' + "</span>";
          //   }
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.carousel}>
          <div>
            <img src={imgSlide1} alt="slide1" className={styles.imgSlide} />
            <div className={styles.textSlide}>
              <div>
                <h1 className={styles.h1}>#EducationForEveryone</h1>
                <h3 className={styles.h3}>
                  proper education is not just a dream
                </h3>
              </div>
              <div className={styles.button}>
                <button className={styles.donate}>DONATE</button>
                <button className={styles.createCamp}>CREATE CAMPAIGN</button>
              </div>
            </div>
            <img src={ellipse} alt="ellipse" className={styles.ellipse} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carousel}>
          <div>
            <img src={imgSlide2} alt="slide2" className={styles.imgSlide} />
            <div className={styles.textSlide}>
              <div>
                <h1 className={styles.h1}>#HealthCareForEveryone</h1>
                <h3 className={styles.h3}>
                  Lobortis ultrices vitae nunc felis, a mattis tristique
                </h3>
              </div>
              <div className={styles.button}>
                <button className={styles.donate}>DONATE</button>
                <button className={styles.createCamp}>CREATE CAMPAIGN</button>
              </div>
            </div>
            <img src={ellipse} alt="ellipse" className={styles.ellipse} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carousel}>
          <div>
            <img src={imgSlide1} alt="slide3" className={styles.imgSlide} />
            <div className={styles.textSlide}>
              <div>
                <h1 className={styles.h1}>#EducationForEveryone</h1>
                <h3 className={styles.h3}>
                  proper education is not just a dream
                </h3>
              </div>
              <div className={styles.button}>
                <button className={styles.donate}>DONATE</button>
                <button className={styles.createCamp}>CREATE CAMPAIGN</button>
              </div>
            </div>
            <img src={ellipse} alt="ellipse" className={styles.ellipse} />
          </div>
        </SwiperSlide>
        <div className={styles.container}>
        <div
          className={`swiper-pagination ${styles.paginationContainer}`}
        ></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
