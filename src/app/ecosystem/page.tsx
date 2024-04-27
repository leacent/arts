"use client";

import clsx from "clsx";
import Image from "next/image";
import "./index.scss";
import IdentityDetail from "@/components/IdentityDetail";
import { useState } from "react";
import { IdentityTypes } from "@/types";
import store from "@/store";
import { observer } from "mobx-react-lite";

const Ecosystem = () => {
  const [identityType, setIdentityType] = useState<IdentityTypes>(
    IdentityTypes.Channel
  );

  const onSelectIdentity = (type: IdentityTypes) => {
    store.identityType = type;
  };

  console.log("store.identityType", store.identityType);

  return (
    <div className="ecosystem">
      <div className="first-screen">
        <div className="banner-box">
          <div className="left-text">
            <p className="text-1">
              {
                "When you create a Web3.0 wallet and complete channel Partner/Casting NFT identification, you can freely upload original works or movies, comics, novels, music, dramas, TV series and other works."
              }
            </p>
            <p className="text-2">
              {
                "After receiving the work, the platform will identify the assets, and then the work will be published in the DAO organization to verify the relationship between the work and you and confirm the number of fans of the work."
              }
            </p>
            <p className="text-3">
              {
                "Part of the proceeds from selling RWA products belongs to the copyright owner of the work, and part belongs to the creator. Creator benefits include virtual benefits and RWA economic income."
              }
            </p>
          </div>
          <Image
            className="astronaut-img"
            width={152}
            height={189}
            src="/imgs/astronaut.png"
            alt="introduction"
          ></Image>
        </div>

        <div className="desc-text">
          {
            "You can freely upload original works or movies, comics, novels, music, dramas, TV series and other works.After receiving the work, the platform will identify the assets, and then the work will be published in the DAO organization to verify the relationship between the work and you and confirm the number of fans of the work."
          }
        </div>
        <Image
          className="downarrow-img"
          width={22}
          height={30}
          src="/imgs/down-arrow.png"
          alt="introduction"
        ></Image>

        <div className="select-identify">SELECT IDENTIFY</div>

        <div className="card-box">
          <div
            className={clsx({
              "identity-item": true,
              "active-identity-item":
                store.identityType === IdentityTypes.Channel,
            })}
            onClick={() => onSelectIdentity(IdentityTypes.Channel)}
          >
            <Image
              src="/imgs/channel.png"
              alt="channel"
              width={102}
              height={144}
              className="identity-item"
            ></Image>
            <div className="identity-text">CHANNEL PARTNER</div>
          </div>
          <div
            className={clsx({
              "identity-item": true,
              "active-identity-item":
                store.identityType === IdentityTypes.Creator,
            })}
            onClick={() => onSelectIdentity(IdentityTypes.Creator)}
          >
            <Image
              src="/imgs/creator.png"
              alt="channel"
              width={102}
              height={144}
              className="identity-item"
            ></Image>
            <div className="identity-text">CREATOR</div>
          </div>
          <div
            className={clsx({
              "identity-item": true,
              "active-identity-item":
                store.identityType === IdentityTypes.Entertainer,
            })}
            onClick={() => onSelectIdentity(IdentityTypes.Entertainer)}
          >
            <Image
              src="/imgs/entertainer.png"
              alt="channel"
              width={102}
              height={144}
              className="identity-item"
            ></Image>
            <div className="identity-text">ENTERTAINER</div>
          </div>
        </div>
      </div>

      <IdentityDetail identityType={identityType} />
    </div>
  );
};

export default observer(Ecosystem);
