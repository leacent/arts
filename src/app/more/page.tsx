import Image from "next/image";
import "./page.scss";

export default function MorePage() {
  return (
    <div className="more-page">
      <div className="more-box">
        <div className="more-item">
          <div className="handle-title">
            <span className="main-title">① Verify Ton Wallet</span>
            <span className="title-descript">
              {"(There's got to be at least 3Tons in there)"}
            </span>
          </div>
          <Image
            className="connect-btn"
            width={152}
            height={33}
            src="/imgs/connect-btn.png"
            alt="introduction"
          ></Image>
        </div>
        <div className="divider"></div>
        <div className="more-item">
          <div className="handle-title">
            <span className="main-title">② Retweet the tweet</span>
            <span className="title-descript">
              {"(There's got to be at least 3Tons in there)"}
            </span>
          </div>
          <div className="retweet">
            <Image
              className="retweet-img"
              width={40}
              height={40}
              src="/imgs/retweet.png"
              alt="introduction"
            ></Image>
            <span className="tweeter-link">https://twitter.com/4arts_io</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="more-item">
          <div className="handle-title">
            <span className="main-title">
              ③ Verify that DC enters the community
            </span>
          </div>
          <Image
            className="verify-btn"
            width={118}
            height={34}
            src="/imgs/verify-btn.png"
            alt="introduction"
          ></Image>
        </div>
      </div>
      <Image
        className="start-ocean"
        width={176}
        height={50}
        src="/imgs/start-ocean.png"
        alt="start ocean"
      ></Image>
    </div>
  );
}
