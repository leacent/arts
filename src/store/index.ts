import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { IdentityTypes } from "@/types";

class Store {
  identityType: IdentityTypes = IdentityTypes.Channel;
  personalModalVisibility: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get identityTitle(): string {
    const titleMap = {
      [IdentityTypes.Channel]: "IMPORT",
      [IdentityTypes.Creator]: "UPLOAD",
      [IdentityTypes.Entertainer]: "",
    };

    return titleMap[this.identityType];
  }
}

const store = new Store();

export default store;
