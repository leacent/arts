import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Radio } from "antd-mobile";
import { IdentityTypes } from "@/types";
import store from "@/store";

interface IProps {
  formTitle: string;
}

const titleMap = {
  [IdentityTypes.Channel]: "IMPORT",
  [IdentityTypes.Creator]: "UPLOAD",
  [IdentityTypes.Entertainer]: "",
};

const DetailForm = (props: IProps) => {
  const { formTitle } = props;
  const [formData, setFormData] = useState({});
  const onchangeInput = (key: string, value: string) => {
    console.log(key, value);

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <div>
      <div className="form-title">{store.identityTitle}</div>
      <div className="detail-form">
        <div className="top-item-box">
          <div className="form-item name-item">
            <Image
              src="/imgs/name.png"
              width={11}
              height={11}
              alt="name"
              className="label-img"
            ></Image>
            <div className="item-label">Name:</div>
            <Input
              onChange={(value) => onchangeInput("name", value)}
              className="input-item"
            ></Input>
          </div>
          <div className="form-item release-item">
            <div className="item-label">Release:</div>
            <Radio.Group
              defaultValue="1"
              onChange={(value) => onchangeInput("release", value.toString())}
            >
              <Radio value="1">Not Yet</Radio>
              <Radio value="2">Within 3 month</Radio>
              <Radio value="3">3 months to 7 years</Radio>
              <Radio value="4">Beyond 7 years</Radio>
            </Radio.Group>
          </div>
        </div>

        <div className="form-item">
          <Image
            src="/imgs/types.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          />
          <div className="item-label">Type:</div>
          <Radio.Group
            defaultValue="1"
            onChange={(value) => onchangeInput("types", value.toString())}
          >
            <Radio value="1">Movie</Radio>
            <Radio value="2">Music</Radio>
            <Radio value="3">Novel</Radio>
            <Radio value="4">Comic</Radio>
            <Radio value="5">Play/TY Series</Radio>
          </Radio.Group>
        </div>

        <div className="form-item">
          <Image
            src="/imgs/countries.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          />
          <div className="item-label">Countries/Regions:</div>
          <Input onChange={(value) => onchangeInput("countries", value)} />
        </div>
        <div className="form-item">
          <Image
            src="/imgs/name2.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          />
          <div className="item-label">Name:</div>
          <Input onChange={(value) => onchangeInput("name2", value)} />
        </div>

        <div className="form-item">
          <Image
            src="/imgs/email.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          />
          <div className="item-label">Company:</div>
          <Input onChange={(value) => onchangeInput("email", value)} />
        </div>

        <div className="form-item">
          <Image
            src="/imgs/phone.png"
            width={11}
            height={11}
            alt="name"
            className="label-img"
          />
          <div className="item-label">Email:</div>
          <Input onChange={(value) => onchangeInput("phone", value)} />
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
