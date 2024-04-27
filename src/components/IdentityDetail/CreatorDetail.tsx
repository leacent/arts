import React, { useState } from "react";
import Image from "next/image";
import DetailForm from "./DetailForm";
import { Button, Input } from "antd-mobile";

const CreatorDetail = () => {
  const [formData, setFormData] = useState({});
  const onchangeInput = (key: string, value: string) => {
    console.log(key, value);

    setFormData({
      ...formData,
      [key]: value,
    });
  };
  return (
    <div className="detail-wrapper">
      <div className="identity-desc">
        {
          "With a creator identity card, you can upload your own entertainment works and earn ENT & ART token."
        }
      </div>
      <div className="mint-btn">MINT NOW</div>

      <Image
        className="factor-image"
        width={373}
        height={621}
        alt="creator-factor"
        src="/imgs/creator-factor.png"
      ></Image>

      <DetailForm formTitle="123" />

      <div className="channel-partner">
        <div className="form-title">CHANNEL PARTNERS</div>
        <div className="form-item">
          <Image
            src="/imgs/people.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          ></Image>
          <div className="item-label partners-label">
            {"Partner's Name:(Real Name)"}
          </div>
          <Input
            onChange={(value) => onchangeInput("name", value)}
            className="input-item"
          ></Input>
        </div>
        <div className="form-item">
          <Image
            src="/imgs/email.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          ></Image>
          <div className="item-label">{"Partner's Email:"}</div>
          <Input
            onChange={(value) => onchangeInput("name", value)}
            className="input-item"
          ></Input>
        </div>

        <div className="form-item">
          <Image
            src="/imgs/phone.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          ></Image>
          <div className="item-label">{"Partner's Telephone:"}</div>
          <Input
            onChange={(value) => onchangeInput("name", value)}
            className="input-item"
          ></Input>
        </div>

        <Button className="auth-btn">AUTHENTICATION</Button>
      </div>
    </div>
  );
};

export default CreatorDetail;
