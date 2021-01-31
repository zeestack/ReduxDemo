import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function storeCreator() {
  return configureStore({ reducer });
}

/* eslint-disable import/no-anonymous-default-export */
/*import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bugs.js";

export const storeCreator = () => {
  const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true })
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};*/
