import { useTonAddress } from "@tonconnect/ui-react";

import { Popup, Space, Button } from "antd-mobile";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import store from "@/store";
import "./index.scss";

const Personal = () => {
  const userFriendlyAddress = useTonAddress();

  return (
    <Popup
      visible={store.personalModalVisibility}
      position="right"
      style={{ backgroundColor: "#0c121d" }}
      bodyStyle={{ backgroundColor: "#0c121d" }}
      bodyClassName="personal-popup"
    >
      <div className="popup-content">
        <Image
          onClick={() => (store.personalModalVisibility = false)}
          className="popup-close"
          src="/imgs/close-icon.png"
          width={20}
          height={20}
          alt="close-icon"
        ></Image>

        <div className="popup-avatar">
          <Image
            className="avatar-img"
            src="/imgs/avatar.png"
            width={20}
            height={20}
            alt="close-icon"
          ></Image>
        </div>
        <div className="account-box">
          <div className="user-name">User Name</div>
          <div className="user-address">
            {userFriendlyAddress.slice(0, 6) +
              "......" +
              userFriendlyAddress.slice(
                userFriendlyAddress.length - 5,
                userFriendlyAddress.length
              )}
          </div>
        </div>
        <div className="balance">$0</div>
        <div className="token-box">
          <div className="token-item">
            <Image
              src="/imgs/ent-icon.png"
              className="token-icon"
              width={48}
              height={48}
              alt="ent"
            ></Image>
            <div className="token-info">
              <div className="token-text-info">
                <div className="token-name">
                  ENT{" "}
                  <span className="token-remark">(Entertainment Token)</span>
                </div>
                <div className="toke-balance">0 ENT</div>
              </div>
              <div className="token-price">$0.00</div>
            </div>
          </div>
          <div className="token-item">
            <Image
              src="/imgs/art-icon.png"
              className="token-icon"
              width={48}
              height={48}
              alt="ent"
            ></Image>
            <div className="token-info">
              <div className="token-text-info">
                <div className="token-name">
                  ENT{" "}
                  <span className="token-remark">(Entertainment Token)</span>
                </div>
                <div className="toke-balance">0 ENT</div>
              </div>
              <div className="token-price">$0.00</div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default observer(Personal);
