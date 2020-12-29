import React from "react";
import useGlobalHook from "./useGlobalHook";
import * as actions from "./actions.js";

export const initialState = {
  defaultDuration: "",
  entrys: [],
  auth: false,
  userData: {},
  errorMessage: "",
  errorState: false,
};
const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
