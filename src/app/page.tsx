"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "./page.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Home() {
  const onStart = () => {
    console.log("start");
  };

  return (
    <main>
      <div className="app">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          speed={800}
          loop
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              className="introduction-img"
              width={381}
              height={373}
              src="/imgs/introduce.png"
              alt="introduction"
            ></Image>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="introduction-img"
              width={381}
              height={373}
              src="/imgs/introduce_2.png"
              alt="introduction"
            ></Image>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="introduction-img"
              width={381}
              height={373}
              src="/imgs/introduce_3.png"
              alt="introduction"
            ></Image>
          </SwiperSlide>
        </Swiper>

        <div className="token-wrapper">
          <Image
            className="ent-btn"
            width={66}
            height={32}
            src="/imgs/ent-btn.png"
            alt="ent-btn"
          ></Image>
          <Image
            className="art-btn"
            width={66}
            height={32}
            src="/imgs/art-btn.png"
            alt="art-btn"
          ></Image>
        </div>

        <div className="token-info-title">Entertainment Token</div>

        <div className="token-info-part">
          <Image
            className="ent-icon"
            width={136}
            height={136}
            src="/imgs/ent-icon.png"
            alt="art-btn"
          ></Image>
          <div className="current-token">ENT</div>
          <div className="buy-btn-box">
            <Image
              className="handle-btn"
              width={108}
              height={31}
              src="/imgs/shopping-cart.png"
              alt="shopping-cart"
            ></Image>
            <Image
              className="handle-btn"
              width={108}
              height={31}
              src="/imgs/app-btn.png"
              alt="app-btn"
            ></Image>
            <Image
              className="handle-btn"
              width={108}
              height={31}
              src="/imgs/analyze-btn.png"
              alt="analyze-btn"
            ></Image>
          </div>

          <div className="token-intro">
            {
              "At the core of this ecosystem is $ENT, a token serving dual functions in both entertainment and finance, to be launched in the project's initial phase. $ENT is designed with a robust deflationary burning mechanism. Holding this token grants users exclusive benefits, ranging from accessing entertainment in the metaverse to exchanging tokens for a variety of goods and services."
            }
          </div>
        </div>

        <div className="application-wrapper">
          <Image
            className="art-btn"
            width={158}
            height={51}
            src="/imgs/application.png"
            alt="application-btn"
          ></Image>
          <Image
            className="art-btn"
            width={158}
            height={51}
            src="/imgs/analyze.png"
            alt="analyze-btn"
          ></Image>
        </div>
        <div className="allocation">
          <Image
            quality={100}
            priority
            className="token-allocation-pic"
            width={158}
            height={51}
            src="/imgs/token-allocation.png"
            alt="token-allocation"
          ></Image>
        </div>
      </div>
    </main>
  );
}
