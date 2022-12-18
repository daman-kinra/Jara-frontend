"use client";

import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";

function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
