"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Radio, Input, ImageUploader, Space, Toast, Dialog } from "antd-mobile";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";

import "./page.scss";

export default function UploadWorks() {
  const defaultSrc =
    "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60";
  const [fileList, setFileList] = useState<ImageUploadItem[]>([]);
  const onUpload = async (file: File): Promise<ImageUploadItem> => {
    console.log("file", file);
    return {
      url: URL.createObjectURL(file),
    };
  };

  console.log("fileList", fileList);
  const renderUpload = () => {
    if (fileList.length > 0) {
      return (
        <Image
          className="uploaded-img"
          width={136}
          height={136}
          src={fileList[0].url}
          alt="introduction"
        ></Image>
      );
    }

    return (
      <ImageUploader
        className="before-upload-img"
        value={fileList}
        onChange={setFileList}
        upload={onUpload}
      />
    );
  };

  const workList = [
    { key: "Europe", label: "Europe", value: 1 },
    { key: "Oceania", label: "Oceania", value: 2 },
    { key: "Aisa", label: "Aisa", value: 3 },
    { key: "Africa", label: "Africa", value: 4 },
    { key: "America", label: "America", value: 5 },
  ];

  return (
    <div className="upload-works">
      <div className="upload-box">
        <div className="upload-works-title">Upload works</div>
        <div className="uoload-form-box">
          <div className="upload-left">
            <div className="upload-part">{renderUpload()}</div>
            <Input className="upload-input" placeholder="Work Name"></Input>
          </div>
          <div className="upload-form-right">
            <div className="work-type">
              <h6 className="upload-form-title">Types of works</h6>
              <Radio.Group>
                {workList.map((item) => {
                  return (
                    <Radio className="radio" key={item.key} value={item.value}>
                      {item.label}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </div>
            <div className="creative-area">
              <h6 className="upload-form-title">Creative area</h6>
              <Radio.Group>
                {workList.map((item) => {
                  return (
                    <Radio className="radio" key={item.key} value={item.value}>
                      {item.label}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </div>
          </div>
        </div>
        <div className="create-btn">Create Work Node</div>
      </div>
    </div>
  );
}
