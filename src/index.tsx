import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom/client";
//import DevTools from 'mobx-react-devtools';

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>
);
