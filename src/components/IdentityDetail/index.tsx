import { observer } from "mobx-react-lite";
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
    <div>
      <h1>IdentityDetail</h1>
    </div>
  );
};

export default observer(IdentityDetail);
