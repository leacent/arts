import { observer } from "mobx-react-lite";
import { Button } from "antd-mobile";
import { IdentityTypes } from "@/types";
import ChannelDetail from "./ChannelDetail";
import CreatorDetail from "./CreatorDetail";
import "./index.scss";
import store from "@/store";

interface IProps {
  identityType: IdentityTypes;
}

const IdentityDetail = (props: IProps) => {
  const { identityType: type } = props;

  if (store.identityType === IdentityTypes.Channel) {
    return <ChannelDetail></ChannelDetail>;
  }

  if (store.identityType === IdentityTypes.Creator) {
    return <CreatorDetail></CreatorDetail>;
  }

  return (
    <div className="entertainer">
      <Button className="not-open-btn">NOT OPEN</Button>
    </div>
  );
};

export default observer(IdentityDetail);
