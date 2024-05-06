"use client";

import { Input, Button, ProgressBar, Space } from "antd-mobile";
import { useState, useRef, useEffect } from "react";
import "./page.scss";

export default function IdoPage() {
  const remainingTime = 3 * 24 * 60 * 60; // second
  const [time, setTime] = useState(remainingTime);
  let timeRef = useRef(1);

  useEffect(() => {
    if (time && time !== 0) {
      timeRef.current = window.setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeRef.current);
    };
  }, [time]);

  const d = parseInt(time / (24 * 60 * 60) + "");
  const h = parseInt(((time / (60 * 60)) % 24) + "");
  const m = parseInt(((time / 60) % 60) + "");
  const s = parseInt((time % 60) + "");

  return (
    <div className="ido-page">
      <div className="count-down-box">
        <div className="count-down-title">Private IDo</div>
        <div className="number-wrapper">
          <div className="number-item">{d > 10 ? d : `0${d}`}</div>
          <div className="number-item">{h}</div>
          <div className="number-item">{m}</div>
          <div className="number-item">{s}</div>
        </div>
      </div>
      <div className="price-box">
        <div className="item-label">PRICE</div>
        <div>1 ton = 1163 ENT</div>
      </div>

      <div className="total-raised">
        <div className="item-label">Total raised</div>
        <div className="raised-progress">
          <span className="raised-label">125.54 ton</span>
          <ProgressBar
            style={{
              "--track-width": "4px",
            }}
            text="418.47%"
            percent={418}
          />
        </div>
      </div>

      <div className="ido-buy">
        <div className="buy-input-wrapper">
          <Input className="ido-input" placeholder="Please input" />
          <Button className="max-button" size="mini">
            MAX
          </Button>
        </div>
        <Button className="ido-buy-btn" size="small">
          BUY
        </Button>
      </div>
    </div>
  );
}
